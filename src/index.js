import React from 'react';
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProjectContextProvider from './context/ProjectContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
    <ProjectContextProvider>
    <App />
    </ProjectContextProvider>
    </BrowserRouter>
);

reportWebVitals();
