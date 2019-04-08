import React from 'react'
import './header.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import HeaderMenuIcon from "../images/header-menu.svg"
import HeaderCloseIcon from "../images/header-cross.svg"

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px;
  box-sizing: border-box;
  opacity: 0.4;
  display: none;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
      isExpanded: false
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

  handleExpand = () => {
    if (this.state.isExpanded === true) {
      this.setState({ isExpanded: false })
    } else {
      this.setState({ isExpanded: true })
    }
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
            <Icon onClick={this.handleExpand} src={this.state.isExpanded ? HeaderCloseIcon : HeaderMenuIcon} alt="Open Menu"/>
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
