import React, { useEffect, useState, useContext } from 'react';
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider';


// localStorage.clear()
const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  


  useEffect(()=>{
    
      const loggedInUser = localStorage.getItem("loggedInUser")
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.Data)
      }
  },[])
  

  const handleLogin = (email, password) => {
    if (email === "anand@gmail.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if ( userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser",JSON.stringify({ role: "employee",data:employee }));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div>
      {/* <Login/> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard  changeUser={setUser}/>:(user =='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null) }
    </div>
  )
}

export default App

