import './style.css';
import { useContext ,useState, useEffect, useRef} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
import {io} from 'socket.io-client'



const Login = () => {
    const socket = useRef();
    const [user , setUser ] = useState("UserName")
    const { setUsername, setUserId, setSocket } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        console.log('fazendo conexao');
          socket.current = io("ws://localhost:3333");
          socket.current.on("connection", () => {
            console.log("connected to server");
          });

          setSocket(socket.current)
    
      }, []);

      useEffect(() => {
        socket.current.on("sendId", (value) => {
            setUserId(value.id);
        })
    
        return () => socket.current.off("sendId")
        
      }, [socket]);

    

    function handleChange({target: {value}}){
        setUser(value)
        setUsername(value)
    } 

    function handleClick(){
        socket.current.emit("set_username", user)

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
