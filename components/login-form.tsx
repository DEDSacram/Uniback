import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from '../styles/login-form.module.css';
import { Userlogin } from '../lib/auth';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Values {
    username: string;
    password: string;
}

export default class LoginForm extends Component {
    render() {
        return (
            <div className={styles.login_box + ' p-3'}>
                <h1 className="display-6 mb-3">Login</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                        setTimeout(async () => {
                            const { data } = await Userlogin(values.username, values.password);
                            console.log(data.password);
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form className="d-flex flex-column">
                        <div className="mb-3">
                            <Field
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Přezdívka"
                                aria-describedby="usernameHelp"
                            />
                        </div>

                        <div className="mb-3">
                            <Field
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Heslo"
                                type="password"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary sm-auto">
                            Login
                        </button>
                    </Form>
                </Formik>
            </div>
        );
    }
}
