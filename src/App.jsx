import { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './page/home'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
          </Route>
        </Routes>
      </Fragment>
    )
  }
}
