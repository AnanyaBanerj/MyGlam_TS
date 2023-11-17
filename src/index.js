import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <GoogleOAuthProvider clientId="<your_client_id>">http://732514175682-rbg1ri1p79ddu91b4mn4gtdplpvat7re.apps.googleusercontent.com</GoogleOAuthProvider>; */}
    <App />
  </React.StrictMode>
);
<GoogleOAuthProvider clientId="<your_client_id>">http://732514175682-rbg1ri1p79ddu91b4mn4gtdplpvat7re.apps.googleusercontent.com</GoogleOAuthProvider>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
