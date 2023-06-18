import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
                 <ToastContainer />
            <RegisterForm />
        </div>
    )
}