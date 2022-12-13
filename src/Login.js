import React from 'react';
import { useRef } from "react";
import {useNavigate} from "react-router-dom"

export default function Login() {

    const name = useRef();
    const password = useRef();

    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();
        const userName = name.current.value;
        const pwd = password.current.value;
        navigate('/Home',{state:{name:userName,password:pwd}});
        // navigate('/');
    };

    return (
        <div className="form">
            <form onSubmit={login}>
                <label>Enter your name:
                    <input
                        type="text"
                        ref={name}

                    />
                </label>

                <label>Enter your password:
                    <input
                        type="text"
                        ref={password}

                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    );
}