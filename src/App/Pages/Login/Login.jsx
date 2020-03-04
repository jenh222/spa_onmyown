import React from 'react';
import '../Pages.scss';
import './Login.scss';

import LoginForm from './LoginForm/LoginForm.jsx';


const Login = () => {
    return(
        <div className ={ 'Pages Login'}>
            <div className="row row1">
                <div className="column column2">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;