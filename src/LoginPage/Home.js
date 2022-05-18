import React from 'react'
import { Link, Route } from "react-router-dom";
import './Home.css';
import './Login_Page.css';
import { useState } from "react";
import UserList from '../UserList/UserList';
import ChatPage from '../ChatPage/ChatPage';

function Home() {
    var thename = "user";
    const [isDisabled, setDisabled] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleLogein = async event => {
        var isOK;
        thename = document.getElementById("username").value;
        var pass = document.getElementById("password").value;
        event.preventDefault();
        const r = await fetch('http://localhost:5281/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: thename, password: pass })
        });
        //.then(Response =>Response.text()).then(text=> {isOK = text}) ;
        if (r.status == 400) {
            alert("username or password are incorrect");
        }
        else {
            setValidated(true);
            setDisabled(true);
            for (let index = 0; index < UserList.length; index++) {
                UserList[index].isAcct = false;  
            }
            var index = UserList.findIndex(({ name }) => name === thename);
            UserList[index].isAcct = true; 
        }
    }
    return (
        <div>
            <div id="Login_Page" className="container">
                <div className="Text card-body shadow-lg p-3 mb-5 rounded">
                    <form className='log-card' onSubmit={handleLogein}>
                        <i className="bi bi-person"></i>
                        <input id="username" type="text" className="form-control" placeholder="username">
                        </input><br></br>
                        <i className="bi bi-lock" ></i>
                        <input id="password" type="password" className="form-control" placeholder="password">
                        </input><br></br>
                        <nav>
                            <Link to="/ChatPage" >
                                <button id="login" className="btn btn-info btn-block btn-signin" disabled={isDisabled} onClick={handleLogein} >Login</button>
                            </Link></nav>
                        <nav>
                            <Link to="/register_page" className="link-dark">Click here to register</Link>
                        </nav>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Home