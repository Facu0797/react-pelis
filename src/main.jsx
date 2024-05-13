import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/App.css";
import { DataProvider } from './Context/dataContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
)
