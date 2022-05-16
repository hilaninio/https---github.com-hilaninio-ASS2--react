
import './Login_Page.css';
import Text_Field from '../Text_Field';
import {Link} from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Register_Page from "./Register_Page"
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>import './Text_Field.css';</link>

var map1 = new Map();
function LoginPage() {
  return (
    
    <div className="home">
    <div className="display-1">Let'sTalk</div>
    <div className="display-2">best way to communicate</div>
      <Routes>
        <Route path="/" element={<Home map1={map1} />} />
        <Route path="register_page" element={<Register_Page map1={map1} />} />
      </Routes>
    </div>
  );
}

export default LoginPage;