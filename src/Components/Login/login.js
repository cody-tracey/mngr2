import { useContext, useState } from "react";
import AppContext from "../../AppContext";
import { Form } from "react-bootstrap";
const Login = () => {

    const myContext = useContext(AppContext);

    const updateGlobal = e => {
        // console.log(e.target.value);
        myContext.updateUsername(e.target.value);
    };

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={myContext.username} onChange={updateGlobal}/>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;