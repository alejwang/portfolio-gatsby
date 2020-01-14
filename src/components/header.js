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

    if (offsetY > 20) {
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
        <div className={this.state.isExpanded ? 'HeaderGroup Expanded' : 'HeaderGroup'}>
          {/* <div className="blurrer"></div> */}
          <div className="Logo">
            <AniLink cover to="/" direction="down" bg="#111"><img width="18" height="20" src={require('../images/logo.png')} alt="Logo"/></AniLink>
            <AniLink cover to="/" direction="down" bg="#111" className="LogoText">Zander Wang</AniLink>
          </div>
          {/* <div className="Links">
            <AniLink cover to="/about" direction="down" bg="#111">About</AniLink>
            <AniLink cover to="/works" direction="down" bg="#111">Resume</AniLink>
            <img className={this.state.isExpanded ? 'MenuIcon Hidden' : 'MenuIcon'} onClick={this.openExpand} src={require('../images/header-menu.svg')} alt="Open Menu"/>
            <img className={this.state.isExpanded ? 'MenuIcon' : 'MenuIcon Hidden'} onClick={this.closeExpand} src={require('../images/header-cross.svg')} alt="Close Menu"/>
          </div> */}
        </div>
        {/* <div className={this.state.isExpanded ? 'HeaderExpanded' : 'HeaderExpanded Hidden'} onClick={this.closeExpand} >
            <AniLink cover to="/" direction="down" bg="#111">home.</AniLink>
            <AniLink cover to="/works" direction="down" bg="#111">work.</AniLink>
            <AniLink cover to="/about" direction="down" bg="#111">about.</AniLink>
        </div> */}
      </header>
    )
  }
}

export default Header
