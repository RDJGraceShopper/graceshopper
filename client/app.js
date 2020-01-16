import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Navbar} from './components'
import Routes from './routes'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Navbar />
          <Routes />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
