import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userapi } from "./api";
import { autho, logout } from "./auth";

export default function Dashboard() {
 const[user,setuser] =  useState({
        name:"",email:"",localID:""
    })
    useEffect(()=>{
        if(autho()){
        userapi().then((response)=>{
           
setuser({
    name:response.data.users[0].displayName,
    email:response.data.users[0].email,
    localID:response.data.users[0].localId


})
        })}
    },[])
  const navigate = useNavigate();
const logoutuser=()=>{
    logout();
    navigate("/")
}
if(!autho()){
    return <Navigate to="/login" />
    }
    return (
        <div className="ttt">
        {/*nav--------------------------------------start*/ }
        
              
          
                
         
        {/*nav-------------------------------------------end*/ }
        < main role = "main" className="dasdboard ccc " >
            <div className="col-md-12 text-center  cccc">

               
                {user.name!="" && user.email!="" && user.localID!=""?
                (<div>
                <p className="text-bold "></p> Hi!!<p>{user.name}</p><br /> 
                
                </div>): <p>loading...</p>}
                <button className="btn">{autho()?(    <li><a class="nav-link"  onClick={logoutuser} style={{cursor:"pointer"}} ><i className="glyphicon glyphicon-log-out"></i> Logout</a></li>):null}</button>
            </div>
    
</main >
   
          </div>

)




}