import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login-form';
import Register from '../components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const mystyle = {
    bordertop: '2px solid rgba(0, 0, 0, 0.1)',

    width: '80%',
};

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center border">
                    <div className="p-2">
                        <LoginForm />
                    </div>
                    <hr style={mystyle}></hr>
                    <div className="p-2">
                        <Register />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
