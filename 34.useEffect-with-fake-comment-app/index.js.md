import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Fake comments (custom 1 event emit ra ở phạm vi global)
/* @param id: id của khóa học.
*/
function emitComment(id) {
  // giả sử cứ 2s gửi 1 comment
  setInterval(() => {
    // gửi đi cho window biết 1 event được dispatch (emit)
    // các event default như scroll, resize.. thì window nó tự emit event rồi
    window.dispatchEvent(
      // CustomerEvent(eventName, objEvent)
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung bình luận của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
