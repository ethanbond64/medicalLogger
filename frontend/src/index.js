import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Navbar from './Navbar';
import history from './History';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UploadForm from './UploadForm';
import ShareForm from './ShareForm';

function Routing() {
  return (
    <Router history={history}>
      <div className={`lg:container lg:mx-auto h-screen`}>
        <Navbar />
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/upload/file" element={<UploadForm />} />
          <Route path="/share/file" element={<ShareForm />} />
        </Routes>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
