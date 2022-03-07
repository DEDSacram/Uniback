import Login from '../components/login';
import Head from 'next/head';
import Registernew from '../components/Register'
import { HrLoginCara,MainLogin,DivLogin,DivLoginSekce } from 'components/styledComp';
//import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
        <>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Coomer Login" />
            </Head>
            <MainLogin>
                <DivLogin>
                    <DivLoginSekce>
                        <Login />
                    </DivLoginSekce>
                    <HrLoginCara />
                    <DivLoginSekce>
                    <Registernew/>
                    </DivLoginSekce>
                </DivLogin>
            </MainLogin>
        </>
    );
}
