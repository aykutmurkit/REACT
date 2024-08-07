import { useState } from 'react'

import './App.css'
import UserList from './UserList'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
      </header>
      <main>
        <UserList/>
      </main>
    </div>
  )
}

export default App
