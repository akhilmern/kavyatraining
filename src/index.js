import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Try from './try';
// import New from './new';
// import New1 from './new1';
// import Calculator from './calculator';
// import Table from './table';
import Todo from './todo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Try/> */}
    {/* <New/> */}
    {/* <Calculator/> */}
    {/* <New1/> */}
    {/* <Table/> */}
    <Todo/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

