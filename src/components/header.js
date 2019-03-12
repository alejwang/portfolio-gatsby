import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false
    }
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
        <div className="HeaderGroup">
          <div className="blurrer"></div>
          <div className="Logo">
            <AniLink cover to="/" direction="down" bg="#111" to="/"><img width="48" height="48" src={require('../images/aw-logo-white-2.5px.svg')}/></AniLink>
            <AniLink cover to="/" direction="down" bg="#111" to="/">alejandro.wang</AniLink>
          </div>
          <div className="Links">
            <AniLink cover to="/work" direction="down" bg="#111" to="/work">work.</AniLink>
            <AniLink cover to="/lab" direction="down" bg="#111" to="/lab">lab.</AniLink>
            <AniLink cover to="/about" direction="down" bg="#111" to="/about">about.</AniLink>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
