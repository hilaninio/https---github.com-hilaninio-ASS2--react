import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './index.css';
import LoginPage from './LoginPage/LoginPage';
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Register_Page from './LoginPage/Register_Page';
import reportWebVitals from './reportWebVitals';
import ChatPage from './ChatPage/ChatPage';



ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Register_Page" element={<Register_Page />} />
        <Route path="/ChatPage" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  ,
  document.getElementById("root")





);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
