import{ Component, Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
      </Fragment>
    ) 
  }
}
