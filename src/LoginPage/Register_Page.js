import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import newperson from '../ChatPage/newperson.jpeg'
import ChatPage from '../ChatPage/ChatPage';
import './Login_Page.css';
import './Register_Page.css';
import { useState } from "react";
import UserList from '../UserList/UserList';
import contactList from '../Contacts/contactList';
import MessegeList from '../ChatMessege/MessegeList';

var thename
function Register_Page() {
  const navigate = useNavigate();
  var profileImg;
  const uploadImg = React.useRef();
  const [isDisabled, setDisabled] = useState(false);

  const [getProfileImg, setProfileImg] = useState(newperson)

  function addImg(event) {
    profileImg = URL.createObjectURL(event.target.files[0]);
    setProfileImg(profileImg);
  }

  function imgButtClick(e) {
    uploadImg.current.click(e);
  }

  const handleSubmit = async event => {
    var error;
    var status1;
    event.preventDefault();
    thename = document.getElementById("username").value;
    var nickname = document.getElementById("disname").value;
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("register").value;
    
    event.preventDefault();
    const r = await fetch('http://localhost:5281/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: thename, name: nickname, password: pass })
    }).then(function (response){
      status1 = response.status
       return response.text().then(function (text){
          error = text
       })  
  });
    if (status1 == 400) {
      alert(error);
    }
    else if (pass != pass2) {
      alert("password must be identical");
      return;
    } else {
      setDisabled(true);
      navigate('/ChatPage', { state: { userID: thename } });
    }
  }

  return (
    <div>
      <div className="display-1">Let'sTalk</div>
      <div className="display-2">best way to communicate</div>
      <script> const var arr =[];

      </script>
      <div id="Login_Page" className="container1">

        <div className="Text card-bod rounded">
          <img id="profil-img" src={getProfileImg}></img>
          <button id="choose-profile-img" className="btn btn-block " onClick={imgButtClick} >
            <i id="prof" className="bi bi-link-45deg"></i> </button>
          <input ref={uploadImg} className="hidden" type="file" onChange={addImg} />

          <form onSubmit={handleSubmit}>
            <i className="bi bi-person"></i>
            <input id="username" type="text" className="form-control" placeholder="username">
            </input><br></br>
            <i className="bi bi-file-earmark-person-fill"></i>
            <input id="disname" type="text" className="form-control" placeholder="display name">
            </input><br></br>
            <i className="bi bi-lock"></i>
            <input id="password" type="password" className="form-control" placeholder="enter your new password">
            </input><br></br>
            <i className="bi bi-lock"></i>
            <input id="register" type="password" className="form-control" placeholder="enter your new password again">
            </input><br></br>

          </form>



          <button id="reg" className="btn btn-info btn-block btn-signin" onClick={handleSubmit} disabled={isDisabled}>Register</button>


          <Link to="/" id="regLink" className="link-dark">already registered? Click here to login</Link>



        </div>
      </div>
    </div>
  )
}
export default Register_Page;
