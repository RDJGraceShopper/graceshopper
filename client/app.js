import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
