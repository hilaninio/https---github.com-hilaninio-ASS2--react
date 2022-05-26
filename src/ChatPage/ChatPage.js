import person from './person6.jpeg'
import newperson from './newperson.jpeg'
import { useLocation } from 'react-router-dom';
import React, { Component, useEffect, useRef, useState } from 'react'
import Contact from '../Contacts/Contact';
import './ChatPage.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import UserList from '../UserList/UserList';
import ChatBox from '../ChatBox/ChatBox';
import Modal from 'react-bootstrap/Modal'
import MassegeListResults from '../MassegeListResults/MassegeListResults';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';
  <script src="~/lib/signalr/signalr.js"></script></link>
function ChatPage() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [getName, setName] = useState('');
  const [massegeList, setMassegeList] = useState([]);
  var nickaName = location.state.userID;
  var user = location.state.userID;
  const theContact = useRef('');
  const [ContactList, setContactList] = useState([]);
  const [connection, setConnection] = useState(null);
  const [curUserName, setcurUserName] = useState('');
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("http://localhost:5281/myHub")
      .configureLogging(LogLevel.Information)
      .build();
    setConnection(newConnection);
  }, [getName]);
  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          connection.on("ReceiveContact", async (id) => {
            const path = "http://localhost:5281/api/" + user + "/Contacts"
            const res = await fetch(path);
            const data = await res.json();
            data.forEach(obj => {
              Object.entries(obj).forEach(([key, value]) => {
                if (key == 'lastDate' && value != null) {
                  const date = new Date(value);
                  const newdate = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '            ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                  obj.lastDate = newdate;
                }
              });
            });
            setContactList(data);
          });

          connection.on("ReceiveMessege", async (userI, nameOfUser) => {
            if (nameOfUser == user) {
              showLastMessege();
              if (userI == theContact.current){
                showChat(userI);
              }
              }
          });

        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);


  function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
  }

  useEffect(async () => {
    const path = "http://localhost:5281/api/" + user + "/Contacts"
    const res = await fetch(path);
    const data = await res.json();
    data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key == 'lastDate' && value != null) {
          const date = new Date(value);
          const newdate = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '            ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
          obj.lastDate = newdate;
        }
      });
    });
    setContactList(data);
  }, []);

  var img = newperson;


  const invokeMessege = async function (userI, nameOfUser) {
    try {
      await connection.invoke("AddMessege", userI, nameOfUser);
    } catch (err) {
      console.error(err);
    }
  }
  //add get messeges request
  const showChat = async function (userName) {
 
    const path = 'http://localhost:5281/api/' + user + '/Contacts/' + userName + '/messeges';
    const res = await fetch(path);
    const d = await res.json();
    //set time
    d.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key == 'created') {
          const date = new Date(value);
          const newdate = addZero(date.getHours()) + ':' + addZero(date.getMinutes());
          obj.created = newdate;
        }
      });
    });
    setMassegeList(d);
    setVisible(true);
    theContact.current = userName;
    setName(userName);

  }



  const showLastMessege = async function () {
    const res = await fetch("http://localhost:5281/api/" + user + "/Contacts");
    const d = await res.json();
    d.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key == 'lastDate') {
          const date = new Date(value);
          const newdate = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '    ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
          obj.lastDate = newdate;
        }
      });
    });
    setContactList(d);
  }

  //add getall request for contacts
  const Contacts = ContactList.map((con, key) => {
    return <Contact {...con} profile_im={newperson} showChat={showChat} key={key} />
  });

  const [show, setShow] = useState(false);

  //add post request contacts
  const addContact = async event => {
    var id = document.getElementById("username").value;
    var nickname = document.getElementById("nickname").value;
    var service = document.getElementById("service").value;
    if (!id || !nickaName || !service) {
      alert("all fields are requeired")
    }
    else {
      const r = await fetch('http://' + service + '/api/invitations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from: user, to: id, server: 'localhost:5281' })
      });
      if (r.status == 400) {
        alert("cant add this contact");
      }
      else {
        setShow(false);
        const res = await fetch('http://localhost:5281/api/' + user + '/Contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: id, name: nickname, server: service })
        });
        //get new contact list
        const r = await fetch('http://localhost:5281/api/' + user + '/Contacts');
        const data = await r.json();
        data.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
            if (key == 'lastDate' && value != null) {
              const date = new Date(value);
              const newdate = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '            ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
              obj.lastDate = newdate;
            }
          });
        });
        setContactList(data);
        try {
          await connection.invoke("AddContact", id);
        } catch (err) {
          console.error(err);
        }
        showChat(id);
      }
    }
  }
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (

    <div>
      <div className="row">
        <div className="col-5">
          <div className="content-list">
            <div className="frame">
              <div className="myname">

                <img className="pull-left profile-pic" src={img}></img>
                <div className="txt">welcome {nickaName}</div>
                <button type="button" className="add-person btn btn-outline-primary" variant="primary" onClick={handleShow} >
                  <i id="add" className="bi bi-person-plus"></i>
                </button>
              </div>
              <div id="thelist">
                <ul id="listg" className="list-group ">
                  {Contacts}
                </ul>
              </div>
            </div>
          </div>
          <form onSubmit={addContact}>
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add new contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <i className="bi bi-person"></i>
                <input id="username" type="text" className="form-control" placeholder="contact's identifier"></input><br></br>
                <i className="bi bi-file-earmark-person"></i>
                <input id="nickname" type="text" className="form-control" placeholder="contact's nickname">
                </input><br></br>
                <i className="bi bi-globe"></i>
                <input id="service" type="text" className="form-control" placeholder="contact's service">
                </input><br></br>
              </Modal.Body>
              <Modal.Footer>
                <button type="button" className="btn btn-info btn-lg" variant="primary" onClick={addContact}>
                  ADD
                </button>
              </Modal.Footer>
            </Modal>
          </form>

        </div>
        <div className="col-7">
          <div className="chat-container">
            <div className="chat-messeges">
              <a className="link-to-rate link-dark" href="http://localhost:5281/rates" >Rate our application</a>

              {visible && <ChatBox user={user} name={getName} showChat={showChat} invokeMessege={invokeMessege} showLastMessege={showLastMessege} img1={newperson} setMassegeList={setMassegeList} />}
              <MassegeListResults mylist={massegeList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;
