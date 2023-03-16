import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import './index.css';
import App from './App';
import FlowerPage from './FlowerPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flowers" element={<FlowerPage />} />
      </Routes>
    </Router>,
  
    document.getElementById("root")
  );
  
  serviceWorker.unregister();