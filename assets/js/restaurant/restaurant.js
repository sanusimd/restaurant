import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import TopSection from './TopSection.js'
import Discover from './Discover.js'
import Catering from './Catering'
import OurMenu from './OurMenu'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Sanusi'
    }
  }
  
  render () {
    return (<div className="home">
      <Header />
      <TopSection />
      <Discover />
      <Catering />
      <OurMenu />

    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
