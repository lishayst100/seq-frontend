import React from 'react';
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProjectContextProvider from './context/ProjectContext';
import { Example } from './components/Responsive Navbar/Example';
import ZZZNavbar from './components/Navbar/ZZZ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <BrowserRouter>
    <ProjectContextProvider>
     {/*  <Example/> */}
    <ZZZNavbar/>
    {/* <Navbar/> */}
    <App />
    <Footer/>
    </ProjectContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
