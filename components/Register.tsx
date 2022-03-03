import { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {Modal, ModalBody, ModalFooter } from 'reactstrap';
import Button from './Buttom'
interface Values {
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
}
function Example() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Button color="primary" type="button" onClick={() => setModalOpen(!modalOpen)}>
                Registrovat
            </Button>

            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div className=" modal-header">
                    <h1 className=" modal-title" id="exampleModalLabel">
                        Registrace
                    </h1>   
                </div>
                <ModalBody>
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
                            <div className="mb-3">
                                <Field
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    placeholder="Přezdívka"
                                    aria-describedby="usernameHelp"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <Field
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Heslo"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    className="form-control"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Potvrzení hesla"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <Field
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email (Optional)"
                                />
                            </div>

                            <Button type="submit" className="btn btn-primary">
                                Registrovat
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </Modal>
        </>
    );
}

export default Example;
