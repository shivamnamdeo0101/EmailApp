// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import LoginForm from './loginform';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LoginForm />
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './login.css'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="g-signin">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
