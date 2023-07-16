/* eslint-disable react/prop-types */
import { useState } from 'react';
import UserContext from './UserContext';


function UserProvider({ children }) {
  const [ username, setUsername ] = useState("")

  const contextValue = {
    username,
    setUsername,
  };

  return (
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}



export default UserProvider;
