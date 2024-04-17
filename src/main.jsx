import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path='/welcome'/>
            <Route path='/signin' />
            <Route path='/skills'/>
            <Route path='/d'>
                <Route path='discover'/>
                <Route path='events'/>
                <Route path='profile'/>
            </Route>
            <Route path='event'/>
            <Route path='event/new'/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
