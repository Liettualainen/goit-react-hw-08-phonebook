import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (contacts, thunkAPI) => {
        try {
            const res = await axios.get('/contacts', contacts);
            return res.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTasks',
    async (contacts, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contacts );
            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        }
          catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)