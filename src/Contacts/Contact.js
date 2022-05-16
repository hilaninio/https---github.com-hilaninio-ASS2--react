import React from 'react'
import './Contact.css';
import { Link, Route} from "react-router-dom";
import { useState } from "react";
import MessegeList from '../ChatMessege/MessegeList';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>

function Contact({profile_im, id , name, last, lastdate, showChat}) {
    

    return (
        <button type="button" className="list-group-item list-group-item-action" onClick={() => showChat(name)}>
        <img className="pull-left profile-pic" src={profile_im}></img>
                        <div className="about">
                            <div id="name" className="name">{name}</div> 
                            <div id="last-messege"> 
                            {last}
                            </div>   
                            <div id="last-messege-time"> 
                            {lastdate}
                            </div>                               
                        </div>
                        </button>
    );
  }
  
  export default Contact;
