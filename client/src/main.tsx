import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContextProvider} from "./components/common/Toast";
import {AuthProvider} from "./context/AuthContext";
import {UserProvider} from "./context/UserContext";
import './services/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
              <AuthProvider>
                  <UserProvider>
                      <ToastContextProvider>
                          <Routes>
                            <Route path='/*' element={<App />}/>
                          </Routes>
                      </ToastContextProvider>
                  </UserProvider>
              </AuthProvider>
          </Router>
      </React.Suspense>
  </React.StrictMode>,
)
