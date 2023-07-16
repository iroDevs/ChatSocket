import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WebChat = () => {
    return (
        <div className="container-chat">
            <h4>Chat</h4>
            <div className="chat"> </div>  
            <Form>
                <Form.Control maxLength={20}  type="text" placeholder="Message.." />
                <Button variant="dark">Enviar</Button>
            </Form>
        </div>
    );
}

export default WebChat;
