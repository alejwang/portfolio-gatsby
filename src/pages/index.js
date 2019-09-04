import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'

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
      highlightColor: 0x666666,
      midtoneColor: 0x0,
      lowlightColor: 0x7265af,
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
            <h1>I am Zander / Zhen - <br/> a fresh UX designer + engineer <br/> into engaging design, bold solutions & elegant craftmanship.</h1>
            <hr/>
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
