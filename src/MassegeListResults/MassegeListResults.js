import React from 'react'
import { Link, Route } from "react-router-dom";
import { useState } from "react";
import MessegeList from '../ChatMessege/MessegeList';
import ChatMessege from '../ChatMessege/ChatMessege';
import index from '../index.js'
import { Component } from 'react'
import Contact from '../Contacts/Contact';
import contactList from '../Contacts/contactList';
import '../ChatPage/ChatPage.css';
import ChatBox from '../ChatBox/ChatBox';
import '../ChatMessege/ChatMessege.css';
import './MassegeListResults.css';

var typeOfMessege;
function MassegeListResults({mylist}) {
    
    const ChatMesseges = mylist.map((mes, key) => {
        if (mes.sent.toString() == "true") {

            typeOfMessege='sendMessege';
        } else {
            typeOfMessege='recieveMessege';
        }
        return <ChatMessege {...mes} key={key} typeOfMessege={typeOfMessege}/>
    
      });

      return(
          <div id="masseges">
          {ChatMesseges}
          </div>
      )
}

export default MassegeListResults