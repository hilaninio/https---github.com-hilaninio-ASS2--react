import * as React from "react";
import './ChatBox.css';
import MessegeList from '../ChatMessege/MessegeList';
import { useState } from 'react'
import Record from "../Record/Record";
import Video from "../Video/Video";


<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>

function ChatBox({ user, name, showChat, showLastMessege, img1, setMassegeList }) {
  var isFile = false;

  const [inputValue, setInputValue] = useState("");
  function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let time = h + ":" + m;

  const newMassege = async function () {
    var input = document.getElementById("messege-input").value;
    if (input == '') {
      return
    }
    if (!isFile) {      
      const r = await fetch('http://localhost:5281/api/' + user +'/Contacts/'+  name +'/messeges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: input })
      });
    }
    setInputValue("");
    showChat(name);
    //put request update contact list
    showLastMessege();
    isFile = false;
  }


  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="chat-box-frame" className='chat-box-frame'>
      <div className='my-chat'>
        <div><img className="pull-left profile-pic" src={img1}></img></div>
        <div id='name'>{name}</div>
      </div>
      <div className="input-group-lg mb-3 send-line input-group-append">
        <input id='messege-input' type="text" value={inputValue} onChange={handleUserInput} placeholder="Type your massege">
        </input>
        <i id="send-button" className="bi bi-send send-button" onClick={newMassege}></i>

      </div>

    </div>
  );
}
export default ChatBox;