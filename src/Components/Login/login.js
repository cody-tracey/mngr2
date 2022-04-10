import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { Form } from "react-bootstrap";
const Login = () => {

    const myContext = useContext(AppContext);

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={myContext.username} onChange={(e) => myContext.updateUsername(e.target.value)}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;