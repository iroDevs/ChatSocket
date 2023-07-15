import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { useState } from 'react';

const Login = () => {
    const [user , setUser ] = useState("")

    function handleChange({target: {value}}){
        setUser(value)
    } 

    return (
        <div className='container-login'>
            <form>
                <h3>{user ? user : "UserName"}</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control maxLength={20} onChange={handleChange} type="text" placeholder="PatoDeBarba" />
                        <a href='/chat'><Button variant="dark">Entrar</Button></a>
                    </Form.Group>
                </Form>
            </form>
        </div>
    );
}

export default Login;
