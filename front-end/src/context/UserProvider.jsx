/* eslint-disable react/prop-types */
import { useState } from 'react';
import UserContext from './UserContext';


function UserProvider({ children }) {
  const [ username, setUsername ] = useState("")
  const [ userId , setUserId ] = useState("")
  const [ socket , setSocket ] = useState()

  const contextValue = {
    username,
    setUsername,
    userId,
    setUserId,
    socket,
    setSocket,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}



export default UserProvider;
