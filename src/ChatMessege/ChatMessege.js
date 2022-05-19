import React from 'react'
import './ChatMessege.css';
import { Component, useEffect, useState } from 'react'
import { Link, Route } from "react-router-dom";
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>


function ChatMessege({ id, content, created, sent ,typeOfMessege}) {
  return (
    <div className="chat-box">
      <div id= {typeOfMessege}>
        <div className="messege">
          <p>
            {content}
          </p>
        </div>
        <div className="time">
          {created}
        </div>
      </div>
    </div>
  );
}


export default ChatMessege;