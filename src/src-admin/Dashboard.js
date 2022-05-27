import React, { useState } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// views component
import { ExcelUploader } from './views/ExcelUploader';
import { Preview } from './views/ExcelPreview';
import { ImageUpload } from './views/ImageUpload';
import Logout from './views/Logout';
//import Navbar from "./views/Navbar.js";

import './App.css';

const signout = () => {
  console.log("signout button clicked");

  sessionStorage.setItem('email',null);
  window.location.reload();
};

function Dashboard() {

    var [excel, setExcel] = useState([]);
    const [files, setFiles] = useState([]);
    const onSuccess = (savedFiles) => {
        setFiles(savedFiles)
    };

    return (
      <div className="App">
        {console.log("[Dashboard] "+sessionStorage.getItem("email"))}
  
        <BrowserRouter>
        
        
          <h1>BIM Sign Bank Administrative Page </h1><br></br>

          <Link id="button-link" to="/Excel" onClick={signout()}>
            <div>test</div>
          </Link><br/><br/>

          <Link id="button-link" to="/ImageUploader" onClick={ImageUpload}>
            
          </Link>

          <Switch>
            <Route exact path="/preview" element = {<Preview files={files}/>} />
            <Route exact path="/Excel" element   = {<ExcelUploader onSuccess={onSuccess}/>} />
            <Route exact path="/ImageUploader" element = {<ImageUpload onSuccess={excel} />} />
            <Route exact path="/Logout" element  = {<Logout/>} />
          </Switch>
        </BrowserRouter>
        <ToastContainer/>
      </div>
    );
}

export default Dashboard;