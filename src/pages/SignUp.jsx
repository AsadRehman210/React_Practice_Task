import React from 'react';
import FormElements from '../components/FormElements';


const SignUp = () => {
    return (
        <main className='form_Section'>
            <div className='container'>
                <form>
                    <h1 className='mb-3'>SignUp</h1>
                    <FormElements
                        type="text"
                        placeholder="Please Enter Your Name"
                        label="Name"

                    />
                    <FormElements
                        type="email"
                        placeholder="email@example.com"
                        label="Email Address"

                    />
                    <FormElements
                        type="text"
                        placeholder="Please Enter your Contact"
                        label="Contact"

                    />
                    <FormElements
                        type="password"
                        placeholder="Please Enter your Password"
                        label="Password"

                    />
                    <FormElements
                        type="password"
                        placeholder="Please Re-Enter your Password"
                        label="Confirm Password"

                    />
                    <button className="w-auto btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
            </div>
        </main>
    )
}

export default SignUp
