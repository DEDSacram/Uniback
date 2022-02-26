import type { NextPage } from 'next';
import Head from 'next/head';
import LoginForm from '../components/login-form';
import Register from '../components/Register';
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
`;

const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #dee2e6;
`;

const DivLoginSekce = styled.div`
    padding: 0.5rem;
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
                <DivLogin>
                    <DivLoginSekce>
                        <LoginForm />
                    </DivLoginSekce>
                    <HrLoginCara />
                    <DivLoginSekce>
                        <Register />
                    </DivLoginSekce>
                </DivLogin>
            </MainLogin>
        </>
    );
};

export default Home;
