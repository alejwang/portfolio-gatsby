import React from 'react'
import './header.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isExpanded: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const offsetY = window.pageYOffset

    if (offsetY > 50) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  openExpand = () => {
    this.setState({ isExpanded: true })
  }

  closeExpand = () => {
    this.setState({ isExpanded: false })
  }

  render() {
    return (
      <header className={this.state.isScrolled ? 'HeaderScrolled' : 'Header'}>
        <div className={this.state.isExpanded ? 'HeaderGroup Black' : 'HeaderGroup'}>
          <div className="blurrer"></div>
          <div className="Logo">
            <AniLink cover to="/" direction="down" bg="#111"><img width="48" height="48" src={require('../images/aw-logo-white-2.5px.svg')} alt="Logo"/></AniLink>
            <AniLink cover to="/" direction="down" bg="#111">alejandro.wang</AniLink>
          </div>
          <div className="Links">
            <AniLink cover to="/work" direction="down" bg="#111">work.</AniLink>
            <AniLink cover to="/lab" direction="down" bg="#111">lab.</AniLink>
            <AniLink cover to="/about" direction="down" bg="#111">about.</AniLink>
            <img className={this.state.isExpanded ? 'MenuIcon Hidden' : 'MenuIcon'} onClick={this.openExpand} src={require('../images/header-menu.svg')} alt="Open Menu"/>
            <img className={this.state.isExpanded ? 'MenuIcon' : 'MenuIcon Hidden'} onClick={this.closeExpand} src={require('../images/header-cross.svg')} alt="Close Menu"/>
          </div>
        </div>
        <div className={this.state.isExpanded ? 'HeaderExpanded' : 'HeaderExpanded Hidden'} onClick={this.closeExpand} >
            <AniLink cover to="/" direction="down" bg="#111">home.</AniLink>
            <AniLink cover to="/work" direction="down" bg="#111">work.</AniLink>
            <AniLink cover to="/lab" direction="down" bg="#111">lab.</AniLink>
            <AniLink cover to="/about" direction="down" bg="#111">about.</AniLink>
        </div>
      </header>
    )
  }
}

export default Header
