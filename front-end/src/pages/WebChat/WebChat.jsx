import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';

const WebChat = () => {
    const [ message, setMessage ] = useState("")
    const [ messageList , setMessageList ] = useState([])
    const { username, userId ,socket } = useContext(UserContext)
    const navigate = useNavigate();



    useEffect(()=> {
        if (!socket) {
            navigate("/")
        } if ( username === "urso"){
            socket.emit("joinSpecialRoom")
        }else {
            socket.emit("joinDefaultRoom")
        }
    },[socket,username,navigate])

    useEffect(()=> {
        socket.on('receive_message', data => {
            setMessageList((current) => [...current,data])
            console.log("lista de messagem", messageList, " Id do usuer>>", userId);
        })

        return () => socket.off("receive_message")
    }, [socket])

    function handleClick(){
        socket.emit('message', message)
        setMessage("")
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
                        const { authorId, author } = message
                        console.log(message);
                         if (authorId == userId ) {
                                return (
                                    <li key={index} className='myMessage'><span>{username}:</span>{message.text}</li>
                                )
                         }else {
                            return (
                                <li key={index} className='sendMessage'><span>:{author}</span>{message.text}</li>
                            )
                         }
                    })}

                </ul>    
            </div>  
            <Form onSubmit={e => e.preventDefault()}>
                <Form.Control value={message} onChange={handleChange} maxLength={200}  type="text" placeholder="Message.." />
                <Button onClick={handleClick} variant="dark">Enviar</Button>
            </Form>
        </div>
    );
}

export default WebChat;
