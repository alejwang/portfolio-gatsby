import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false
    }
    this.location = props.location.slice(1)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const offsetY = window.pageYOffset

    if (offsetY > 100) {
      this.setState({ isScrolled: true }) 
    } else {
      this.setState({ isScrolled: false })
    }
  }

  render() {
    return (
      <header className={this.state.isScrolled ? 'HeaderScrolled' : 'Header'}>
        <div className="Logo">
          <Link to="/"><img width="48" height="48" src={require('../images/aw-logo-white-2.5px.svg')}/></Link>
          <Link to="/">alejandro.wang</Link>
        </div>
        <div className="Links">
          <Link to="/work">work.</Link>
          <Link to="/lab">lab.</Link>
          <Link to="/about">about.</Link>
        </div>
      </header>
    )
  }
}

export default Header
