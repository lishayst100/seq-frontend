import React, { lazy, Suspense } from 'react'; // ייבוא lazy ו-Suspense
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProjectContextProvider from './context/ProjectContext';

// 💡 שלב 1: הגדרת Footer כטעינה עצלה
// הקוד של Footer (כולל Lottie ו-FooterLogo) יפוצל לקובץ JS נפרד
const LazyFooter = lazy(() => import('./components/Footer/Footer'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
  <ProjectContextProvider>
   <App />
   
   {/* 💡 שלב 2: שימוש ב-Suspense */}
   {/* ה-Footer יטען רק כאשר ה-CPU פנוי, או כשהמשתמש גולל */}
   <Suspense fallback={null}> 
    <LazyFooter />
   </Suspense>

  </ProjectContextProvider>
  </BrowserRouter>
);

reportWebVitals();