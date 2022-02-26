import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login-form';
import Register from '../components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';

const HrLoginCara = styled.hr`
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    width: 80%;
`;

const MainLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box;
`;

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainLogin>
                <div className="d-flex flex-column justify-content-center align-items-center border">
                    <div className="p-2">
                        <LoginForm />
                    </div>
                    <HrLoginCara />
                    <div className="p-2">
                        <Register />
                    </div>
                </div>
            </MainLogin>
        </>
    );
};

export default Home;
