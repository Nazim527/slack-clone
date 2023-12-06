import React from 'react'
import './App.scss'
import Header from './layouts/header'
import SideBar from './layouts/SideBar'

function App() {

  return (
    <>
      <h1>Slack Clone Lets Go :rocket</h1>
      <Header/>
      <div className="app_body">
        <SideBar/>
      </div>
    </>
  )
}

export default App
