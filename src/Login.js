import React, { useState } from 'react'
import { useHistory } from 'react-router';
import {auth} from "./firebase";


function Login({fullName,setFullName}) {

    const history = useHistory();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    // console.log(email, password)


    function loginFunc(e){
     auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("./")
        })   
    }



    function registerFunc(e){
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if (auth){
                history.push("./")
            }
        })
        .catch(err=>{alert(err.message)})
    }

    return (
        <div className="loginWrapper">

        <div className="mainWrapper">

        <div className="loginDiv">
        <h3>Sign in</h3>
            <p>Full Name</p>
            <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" />

            <p>Email</p>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
            <p>Password</p>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" /><br/>

            <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </small><br/>

            <button onClick={(e)=>loginFunc(e)}>Submit</button>
        </div>
        <button onClick={(e)=>registerFunc(e)}>Create Amazon account</button>

        </div>

        </div> 
    )
}

export default Login
