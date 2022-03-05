import { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Popup from 'reactjs-popup';
import { Button, Modal } from './styledComp';
interface Values {
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
}
function Example() {
    return (
        <>
            <Popup trigger={<Button>Registrovat</Button>} modal>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        confirmpassword: '',
                        email: '',
                    }}
                    onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}
                >
                    <Form>
                        <Modal>
                            <h1>Registrace</h1>
                            <div>
                                <Field id='username' name='username' placeholder='Přezdívka' required />
                            </div>

                            <div>
                                <Field id='password' name='password' placeholder='Heslo' type='password' required />
                            </div>
                            <div>
                                <Field id='confirmpassword' name='confirmpassword' placeholder='Potvrzení hesla' type='password' required />
                            </div>
                            <div>
                                <Field id='email' name='email' placeholder='Email (Optional)' />
                            </div>

                            <Button type='submit'>Registrovat</Button>
                        </Modal>
                    </Form>
                </Formik>
            </Popup>
        </>
    );
}

export default Example;
