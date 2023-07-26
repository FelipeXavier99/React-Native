
// Recomendado usar com bastante transferecia de dados!

import React, { createContext, useReducer } from 'react'
import users from '../data/users9'


const UsersContext = createContext({})

export const UsersProvider = props => {


    return (
        <UsersContext.Provider value={{
            state: {
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider >
    )
}

export default UsersContext