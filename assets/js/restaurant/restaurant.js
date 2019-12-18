import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import TopSection from './TopSection'
import Discover from './Discover'
import Catering from './Catering'
import OurMenu from './OurMenu'
import Recommend from './Recommend'

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
      <Recommend />

    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
