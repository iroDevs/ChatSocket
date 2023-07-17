import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { useContext, useEffect, useState } from 'react';

const WebChat = () => {
    const [ message, setMessage ] = useState("")
    const [ messageList , setMessageList ] = useState([])

    const { username, userId ,socket } = useContext(UserContext)

    useEffect(()=> {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current,data])
            console.log("lista de messagem", messageList, " Id do usuer>>", userId);
        })

        return () => socket.off("receive_message")
    }, [socket])

    function handleClick(){
        socket.emit('message', message)
    }

    function handleChange({target: {value}}){
        setMessage(value)
    }
    return (
        <div className="container-chat">
            <h4>Chat</h4>
            <div className="chat">
                <ul>
                    {messageList.map((message,index)=>{
                        const { authorId } = message
                         if (authorId == userId ) {
                                return (
                                    <li key={index} className='myMessage'><span>{username}</span>{message.text}</li>
                                )
                         }else {
                            return (
                                <li key={index} className='sendMessage'><span>{message.author}</span>{message.text}</li>
                            )
                         }
                    })}
                    <li className='myMessage'><span>{username}:</span>Opa como vai mano</li>
                    <li className='sendMessage'><span>:{'CatMatador'}</span> Tudo Bom </li>
                </ul>    
            </div>  
            <Form>
                <Form.Control onChange={handleChange} maxLength={200}  type="text" placeholder="Message.." />
                <Button onClick={handleClick} variant="dark">Enviar</Button>
            </Form>
        </div>
    );
}

export default WebChat;
