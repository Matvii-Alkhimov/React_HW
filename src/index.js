import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const containerEl = document.getElementById('root');
const root = ReactDOM.createRoot(containerEl);
const hwQuantity = 5;

for (let i = 1; i <= hwQuantity; i += 1) {
  const hwBtn = document.createElement("button");
  hwBtn.id = i;
  hwBtn.classList.add("homework-btn");
  hwBtn.textContent = `Homework-${i}`;
  containerEl.append(hwBtn);
}

window.addEventListener("click", (event)=>{
  if (event.target.nodeName === "BUTTON") {
    renderHomeworkFn(event.target.id);
  }
})

const renderHomeworkFn = (id) => {
  root.render(
    <>
      <App id={id}></App>
    </>
  )
}

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );