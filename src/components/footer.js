import React from 'react'
import './footer.css'
import styled from 'styled-components'

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin: 0px;
  box-sizing: border-box;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="Copyright">
          <p>© crafted in San Diego / Ann Arbor</p>
        </div>
        <div className="PersonalLinks">
          <a href="https://github.com/alejwang"><Icon src={require("../images/footer-github.svg")} alt="My Github"/></a>
          <a href="https://www.instagram.com/alejwang/"><Icon src={require("../images/footer-instagram.svg")} alt="My Instagram"/></a>
          <a href="https://www.linkedin.com/in/alejwang/"><Icon src={require("../images/footer-linkedin.svg")} alt="My LinkedIn"/></a>
        </div>
      </footer>
    )
  }
}

export default Footer
