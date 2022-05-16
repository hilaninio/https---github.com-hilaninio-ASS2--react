import person from './person6.jpeg'
import newperson from './newperson.jpeg'
import React, { Component, useEffect, useState } from 'react'
import Contact from '../Contacts/Contact';
import './ChatPage.css';
import contactList from '../Contacts/contactList';
import MessegeList from '../ChatMessege/MessegeList';
import UserList from '../UserList/UserList';
import ChatBox from '../ChatBox/ChatBox';
import Modal from 'react-bootstrap/Modal'
import MassegeListResults from '../MassegeListResults/MassegeListResults';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>
function ChatPage() {
  const [visible, setVisible] = useState(false);
  const [getName, setName] = useState('');
  const [getImg, setImg] = useState('');
  const [massegeList, setMassegeList] = useState([]);
  var nickaName = UserList.find(user => user.isAcct==true).nickname;
  var user = UserList.find(user => user.isAcct==true).name;
  const [ContactList, setContactList] = useState([contactList]);
  

  useEffect(async() => {
    const res = await fetch("http://localhost:5281/api/Contacts");
    const data = await res.json();
    setContactList(data);
  }, []);


  var img= UserList.find(user => user.isAcct==true).img;
  if (img==null) {
    img=newperson;
  }
  //add get messeges request
  const showChat = function (userName) {
    setMassegeList(MessegeList[user].filter((ChatMessege) => ChatMessege.name.includes(userName)));
    setVisible(true);
    setName(userName);
   setImg(ContactList.find(Contact => Contact.name == userName).profile_im)
  }
  //add??
  //const showLastMessege = function (lastMessege, name,time) {
 //   var objIndex = ContactList.findIndex((obj => obj.name == name));
 //   setContactList((prev)=>{
 //     ContactList[objIndex].lastdate = time;
//ContactList[objIndex].last = lastMessege;
     
   //   return ContactList;
 //   })
 // }
//add getall request for contacts
  const Contacts = ContactList.map((con, key) => {
    return <Contact {...con} profile_im= {newperson} showChat={showChat} key={key} />
  });

  const [show, setShow] = useState(false);
  //add post request contacts
  const addContact = event => {
    //console.log(this.props.nickaName);
    var thename = document.getElementById("username").value;
    if (!thename) {
      alert("type the contact name")
  }
  //add post request
  else{
    setShow(false);
    setContactList(ContactList = ContactList.push({ profile_im: newperson, id: thename ,name: thename, last:'' , lastdate:''}));
    showChat(thename);
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
                <input id="username" type="text" className="form-control" placeholder="contact's identifier">
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
            {visible && <ChatBox user={user} name={getName} showChat={showChat} img1={getImg}/>}
              <MassegeListResults mylist={massegeList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatPage;

