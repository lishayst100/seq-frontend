// src/index.js

import React, { lazy, Suspense } from 'react'; // 💡 ייבוא lazy ו-Suspense
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProjectContextProvider from './context/ProjectContext';
// ❌ הסר את הייבוא הרגיל של Footer: import Footer from './components/Footer/Footer'; 

// 💡 הגדרת Footer כטעינה עצלה
const LazyFooter = lazy(() => import('./components/Footer/Footer'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  <ProjectContextProvider>
   <App />
   
   {/* 💡 עוטף את ה-Footer ב-Suspense כדי לטעון אותו מאוחר יותר */}
   <Suspense fallback={null}> 
    <LazyFooter />
   </Suspense>

  </ProjectContextProvider>
  </BrowserRouter>
);

reportWebVitals();