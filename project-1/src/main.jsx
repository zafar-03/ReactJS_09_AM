// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Header from './components/Header'
import "./App.css";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.querySelector("#root"));

// const element = <h1>New Element</h1>
// root.render(element);

// root.render(<Header/>);
root.render(<App/>);

