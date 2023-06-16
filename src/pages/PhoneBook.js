import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {  ContactInputForm} from 'components/ContactInputForm/ContactInputForm';
import { fetchTasks } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { FilterContact } from 'components/Filter/Filter';
import { selectAllTasks } from 'redux/contacts/selectors'

import { Spinner } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function PhoneBook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const tasks = useSelector(selectAllTasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <>
            <Helmet>
            <title>Your Contacts List</title>
            </Helmet>
          <ToastContainer />
            < ContactInputForm />         
            <div>{isLoading && <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl' />}</div>
          <div> {tasks.length !== 0 && < FilterContact />}</div>     
        </>
    )
}