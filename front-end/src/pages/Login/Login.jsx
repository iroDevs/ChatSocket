import './style.css';
import { useContext ,useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
import socketUtils from '../../socket/socketUtils';

const Login = () => {
    const [user , setUser ] = useState("UserName")
    const { setUsername } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(()=> {
        socketUtils.connectedIO();
    },[])

    function handleChange({target: {value}}){
        setUser(value)
        setUsername(value)
    } 

    function handleClick(){
        return navigate("/chat");
    }
    return (
        <div className='container-login'>
            <div>
                <h3>{user ? user : "UserName"}</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control maxLength={20} onChange={handleChange} type="text" placeholder="PatoDeBarba" />
                       <Button onClick={handleClick} variant="dark">Entrar</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default Login;
