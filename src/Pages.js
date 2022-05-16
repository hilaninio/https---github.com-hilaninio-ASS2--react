import logo from './logo.svg';
import React, {Component} from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Text_Field from './Text_Field';
import Login_Page from './Login_Page';
import Home from './LoginPage/Home';
import Register_Page from './LoginPage/Register_Page';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>


class Pages extends Component{
  constructor(props) {
      super(props);
    
  }

  render() {
      return (
       <Login_Page />
      );
  }
}

export default Pages;