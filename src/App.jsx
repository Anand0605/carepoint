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

  const [user, setUser] = useState(null)
  // const [loggedInUserData, setLoggedInUserData] = useState(null)
  // const authData = useContext(AuthContext)
  // console.log(authData?.employees)

  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }

  // },[authData])
  // console.log(user)

  // const handleLogin = (email, password) => {
  //   console.log("authData:", authData); // Debugging
  //   if (email === "anand@gmail.com" && password === "123") {
  //     setUser("admin");
  //     localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
  //   } else if (authData && Array.isArray(authData.employees)) {
  //     const employee = authData.employees.find(
  //       (e) => e.email === email && e.password === password
  //     );
  //     if (employee) {
  //       setUser("employee");
  //       setLoggedInUserData(employee);
  //       localStorage.setItem(
  //         "loggedInUser",
  //         JSON.stringify({ role: "employee" })
  //       );
  //     } else {
  //       alert("Invalid Credentials");
  //     }
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // };
  

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      // console.log('this   is admin')
        setUser('admin');
    } else if (email == 'user@me.com' && password == '123') {
      setUser('user')
        // console.log("This is User");
    } else {
        alert("Invalid Credentials");
    }
};



  
  return (
    <div>
      {/* <Login/> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard />:<EmployeeDashboard />}
      {/* {user === 'employee' && <EmployeeDashboard  />} */}

    </div>
  )
}

export default App
