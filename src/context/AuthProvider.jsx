import React, { createContext,useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)
    // const [userData, setUserData] = useState({ employees: [], admin: null });

    useEffect(()=>{
        const{employees,admin} = getLocalStorage()
        setUserData({employees,admin})
       
    },[])
    // useEffect(() => {
    //     const { employees, admin } = getLocalStorage();
    //     if (employees || admin) {
    //       setUserData({ employees, admin });
    //     }
    //   }, []);
    
    //   console.log(userData); // Log to see if data is correct
    return (
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
