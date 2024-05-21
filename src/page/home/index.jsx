import{ Component, Fragment } from 'react'
import "./Home.scss"
import Hero from './hero'
import Products from '../../components/products'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero/>
        <Products/>
      </Fragment>
    )
  }
}
