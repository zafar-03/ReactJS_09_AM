import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const arr = [
  {
    fname : "Rajveer",
    lname : "Sharma",
    age : 20
  },
  {
    fname : "Sahil",
    lname : "Shah",
    age : 10,
    url : "sdfghyjuio"
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App fname="Sahil" lname="shah"/> */}
    <App data={arr}/>
  </StrictMode>,
)
