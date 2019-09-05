import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'
import styled from 'styled-components'

const MyInfo = styled.h1`
    display: block;
    box-sizing: border-box;
    position: relative;

    margin: 1em 0 2.5em 0;
    padding: 25px; 
  
    font-weight: 500;
    font-size: 1.6em; 
    line-height: 1.3;

    color: #ddd;
    background: #333;
    border-radius: 20px;

    // @media (max-width: 1224px) {
    //     margin:0 6em 0.6em 0;
    // }
    // @media (max-width: 768px) {
    //     width: 100%;
    //     height: 220px;
    //     display: block;
    //     margin:0 0 12px 0;
    //     padding-top: 170px;
    // }
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
    }
  }

  handleScroll = (event) => {
    const offsetY = window.pageYOffset

    if (offsetY > 5) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.effect = window.VANTA.FOG({
      el: '#background',
      highlightColor: 0x222222,
      midtoneColor: 0x0,
      lowlightColor: 0x111111,
      baseColor: 0x0,
      blurFactor: 0.90,
      speed: 2.00,
      zoom: 0.50
    })
  }
  
  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }
  
  render() {
    return (
      <div>
        <div id="background"> </div>
        <div className="container">
          <div className="containerGroup">
            <MyInfo>
              I am Zander / Zhen - a newgrad UX designer + engineer 
              <br/>into engaging design, bold solutions & elegant craftmanship.
              <br/>Check my recent works below 👇</MyInfo>
          </div>
          
          <div className={this.state.isScrolled ? 'containerGroup' : 'containerGroup containerGroupDeactivated'}>
            <div className="cardsGroup">
              {staticdata.cats.selected.map(name => 
                <Work data={staticdata.works[name]} fromList="selected" /> 
              )}
            </div>
          </div>
        </div>
      </div>
  )
  }
} 

export default IndexPage
