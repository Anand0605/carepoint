import React, { createContext,useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState([])

    // const data = getLocalStorage()
    // console.log(data.employees)
    // const [userData, setUserData] = useState({ employees: [], admin: null });

    useEffect(()=>{
        setLocalStorage()
        const{employees} = getLocalStorage()
        setUserData(employees)
        console.log(employees)
       
    },[])
    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;


