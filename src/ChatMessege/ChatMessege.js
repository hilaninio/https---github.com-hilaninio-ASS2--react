import React from 'react'
import './ChatMessege.css';

import { Link, Route } from "react-router-dom";
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>
  const ImageThumb = ({ image }) => {
    const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  if( matchPattern.test(image)){
    return <img className='new-pic' src={image} alt={image.name} />;
  }
  return <img className='new-pic' src={URL.createObjectURL(image)} alt={image.name} />;
  };
  
function ChatMessege({userName, content, time,messege, file ,audio, video, typeOfMessege }) {
  return (
    <div className="chat-box">
      <div id={typeOfMessege}>
        <div className="messege">
        <p>
          {messege && content}
          </p>
        </div>
      {audio && <audio src={content} controls /> }
        {file && <ImageThumb image={content} />}
        {video && <video
          className="VideoInput_video"
          width="100%"
          controls
          src={content}
        />}
      
        
        <div className="time">
          {time}
        </div>
      </div>
    </div>
  );
}


export default ChatMessege;