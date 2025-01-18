import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider';

const App = () => {

  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser]= useState(null)
  const authData = useContext(AuthContext)
  console.log(authData?.employees)

  const handleLogin=(email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      // console.log(user)
    }else  if(email == 'user@me.com' && password == '123'){
      setUser('employee')
      // console.log(user)
    }
    else{
      console.log('invalid credintial')
    }

  }

  
  // handleLogin('user@me.com',123)
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user ==='admin' && <AdminDashboard/>}
      {user ==='employee' && <EmployeeDashboard/>}
     
    </div>
  )
}

export default App
