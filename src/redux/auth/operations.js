import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
const clearAuthHeader = () => { 
    axios.defaults.headers.common.Authorization =  '';
}
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return (
                  // alert('Email or password incorrect'),
                toast.error('The user has already registered', {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 2000,
                        pauseOnHover: true,
                        draggable: true,
                        }),
                 thunkAPI.rejectWithValue(error.message))
         
        }
    });

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return (
                // alert('Email or password incorrect'),
                toast.error('Email or password incorrect', {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: 2000,
                        pauseOnHover: true,
                        draggable: true,
                        }),
                thunkAPI.rejectWithValue(error.message))
        }
    });

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const  persistedToken  = state.auth.token;

    if (persistedToken === null) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  
    try {     
             setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
            return response.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });