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

const BigText = styled.img`
    // display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 102%;
    opacity: 0.2;
    animation: goaround 60s infinite linear;

    @keyframes goaround {
      0% {
        left: 0;
      }
      100% {
        left: -102%;
      }
    }
`

const BigText2 = styled(BigText)`
    margin-left: 102%;
`

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="Copyright">
          <p>© Zander Wang <br/>Crafted in San Diego</p>
        </div>
        <div className="PersonalLinks">
          <a href="https://github.com/alejwang"><Icon src={require("../images/footer-github.svg")} alt="My Github"/></a>
          <a href="https://www.instagram.com/alejwang/"><Icon src={require("../images/footer-instagram.svg")} alt="My Instagram"/></a>
          <a href="https://www.linkedin.com/in/alejwang/"><Icon src={require("../images/footer-linkedin.svg")} alt="My LinkedIn"/></a>
        </div>
        <BigText src={require("../images/big-text.svg")} />
        <BigText2 src={require("../images/big-text.svg")} />
      </footer>
    )
  }
}

export default Footer
