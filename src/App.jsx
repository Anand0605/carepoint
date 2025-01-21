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
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData?.employees)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
   
  // },[authData])

  const handleLogin=(email, password)=>{
    if(email == 'anand@gmail.com' && password == '123'){
      setUser('admin')
      // console.log(user)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else  if(authData && authData.employees.find((e) => e.email === email && e.password === password)){
      setUser('employee')
      // console.log(user)
      // setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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
      {user ==='employee' && <EmployeeDashboard data ={loggedInUserData} />}
     
    </div>
  )
}

export default App
