import React from "react";
import { Form, FormGroup, FormLabel } from "react-bootstrap";

const SignUpForm = () => {

    return (
        <div className="bg-light p-3">
            <Form>
                <FormGroup className="mb-3" controlId="formBasicUsername">
                    <FormLabel>Username</FormLabel>
                    <Form.Control type="text" placeholder="Enter a username" />
                    <Form.Text className="text-muted">
                        Username
                    </Form.Text>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicFirstName">
                    <FormLabel>First name</FormLabel>
                    <Form.Control type="text" placeholder="Enter your first name" />
                    <Form.Text className="text-muted">
                        First name
                    </Form.Text>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicLastName">
                    <FormLabel>Last name</FormLabel>
                    <Form.Control type="text" placeholder="Enter a last name" />
                    <Form.Text className="text-muted">
                        Last name
                    </Form.Text>
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <Form.Control type="text" placeholder="Enter a password" />
                    <Form.Text className="text-muted">
                        Password
                    </Form.Text>
                </FormGroup>
            </Form>
        </div>
    );
};

export default SignUpForm;