import './style.css';
import { useContext ,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';

const Login = () => {
    const [user , setUser ] = useState("")
    const { setUsername } = useContext(UserContext)

    function handleChange({target: {value}}){
        setUser(value)
        setUsername(value)
    } 

    return (
        <div className='container-login'>
            <div>
                <h3>{user ? user : "UserName"}</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control maxLength={20} onChange={handleChange} type="text" placeholder="PatoDeBarba" />
                        <a href='/chat'><Button variant="dark">Entrar</Button></a>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login;
