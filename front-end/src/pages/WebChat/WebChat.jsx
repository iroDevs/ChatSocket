import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';

const WebChat = () => {
    const { username } = useContext(UserContext)
    console.log( username );
    return (
        <div className="container-chat">
            <h4>Chat</h4>
            <div className="chat">
                <ul>
                    <li className='myMessage'><span>{username}:</span>Opa como vai mano</li>
                    <li className='sendMessage'><span>:{'CatMatador'}</span> Tudo Bom </li>
                </ul>    
            </div>  
            <Form>
                <Form.Control maxLength={20}  type="text" placeholder="Message.." />
                <Button variant="dark">Enviar</Button>
            </Form>
        </div>
    );
}

export default WebChat;
