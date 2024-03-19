import React from 'react';
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProjectContextProvider from './context/ProjectContext';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
    <ProjectContextProvider>
    <App />
    <Footer/>
    </ProjectContextProvider>
    </BrowserRouter>
);

reportWebVitals();
