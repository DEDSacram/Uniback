import { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Popup from 'reactjs-popup';
import {Button} from './styledComp';
interface Values {
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
}
function Example() {
    // const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
         <Popup trigger={<Button>Registrovat</Button>} 
                modal>
                
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
                            <div>
                                <Field
                                    id="username"
                                    name="username"
                                    placeholder="Přezdívka"
                                    required
                                />
                            </div>

                            <div>
                                <Field
                                    id="password"
                                    name="password"
                                    placeholder="Heslo"
                                    type="password"
                                    required
                                />
                            </div>
                            <div>
                                <Field
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Potvrzení hesla"
                                    type="password"
                                    required
                                />
                            </div>
                            <div>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="Email (Optional)"
                                />
                            </div>

                            <Button type="submit">
                                Registrovat
                            </Button>
                        </Form>
                    </Formik>

                </Popup>
          

          
        </>
    );
}

export default Example;
