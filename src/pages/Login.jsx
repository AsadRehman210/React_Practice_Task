import React from 'react'
import FormElements from '../components/FormElements'
import { useDispatch } from 'react-redux'
import { login } from '../redux/action/UserAction';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        dispatch(login ("user_login_successfully"));
        console.log(email, password);
        navigate("/")
    }

    return (
        <main className='form_Section'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <h1 className='mb-3'>Login</h1>
                    <FormElements
                        type="email"
                        placeholder="email@example.com"
                        label="Email Address"
                        name = "email"

                    />
                    <FormElements
                        type="password"
                        placeholder="please Enter Your Password"
                        label="Password"
                        name="password"

                    />
                    <button className="w-auto btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
            </div>
        </main>
    )
}

export default Login
