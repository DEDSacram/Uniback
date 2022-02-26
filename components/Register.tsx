import { useState } from 'react';
import { BsFillXCircleFill } from 'react-icons/bs';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

interface Values {
    username: string;
    password: string;
    confirmpassword: string;
    email: string;
}

function Example() {
    const [modalOpen, setModalOpen] = useState(false);

    const IconButton = styled.button`
        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        overflow: hidden;
        outline: none;
    `;
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
                    <IconButton type="button" onClick={() => setModalOpen(!modalOpen)}>
                        {' '}
                        <BsFillXCircleFill onClick={() => setModalOpen(!modalOpen)} />{' '}
                    </IconButton>
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
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
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

                            <button type="submit" className="btn btn-primary">
                                Registrovat
                            </button>
                        </Form>
                    </Formik>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </Modal>
        </>
    );
}

export default Example;
