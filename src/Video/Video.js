import * as React from "react";
import MessegeList from '../ChatMessege/MessegeList';
import './Video.css';


function Video({user, name, time,showChat, showLastMessege}) {
var isVideo = false;

const uploadVideoBtn = React.useRef();
const [getVideo, setVideo] = React.useState("");


function videoIconClick(e){
  uploadVideoBtn.current.click(e);
}

function handleUpload(event) {
  isVideo = true;
  setVideo(event.target.files[0]);      
  MessegeList[user].push({ name: name, content: URL.createObjectURL(event.target.files[0]), time: time,messege:false,file:false,audio:false,video:true, typeOfMessege: 'sendVideo'});     
  setVideo("");
  showChat(name);
  showLastMessege('video',name,time);     
}

  return (
<div>
<i id = "vid" onClick={videoIconClick} className="bi bi-film"></i>
<input
        ref={uploadVideoBtn}
        className="VideoInput_input hidden"
        type="file"
        accept=".mov,.mp4"
        value={getVideo} 
        onChange={handleUpload}
      />
</div>
  );
}

export default Video;