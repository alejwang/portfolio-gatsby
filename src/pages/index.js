import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const MyInfo = styled.h1`
    display: block;
    box-sizing: border-box;
    position: relative;
    width: auto;
    // max-width: 960px;

    margin: 1em 0 4em 0;
    padding: 24px; 
  
    font-weight: 500;
    font-size: 1.5em; 
    line-height: 1.3;

    color: #ddd;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;

    @media (max-width: 1224px)  {
      font-size: 1.2em; 
    }

    @media (max-width: 768px) {
        font-size: 1.2em; 
        margin:1em 0 24px 0;
        background: rgba(255, 255, 255, 0.1);
    }
`

const Secondary = styled(MyInfo)`
    margin: 0.5em 0 0 0;
    padding: 0;
    font-size: 1em; 
    color: #888;
    background: none;
    @media (max-width: 1224px)  {
      font-size: 1em; 
    }
    @media (max-width: 768px) {
      font-size: 1em; 
      margin: 0.8em 0 0 0;
      background: none;
    }
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      isScrolled: false,
      prevOffsetY: window.pageYOffset,
      isScrollDown: true,
      lastAppearIndex: 0,
      lastDisappearIndex: 0
    }
  }

  handleScroll = (event) => {
    const { prevOffsetY } = this.state;

    const offsetY = window.pageYOffset;
    const isScrollDown = offsetY >= prevOffsetY;

    if (offsetY > 5) {
      this.setState({ 
        isScrolled: true,
        prevOffsetY: offsetY,
        isScrollDown
      })
    } else {
      this.setState({ 
        isScrolled: false,
        prevOffsetY: offsetY,
        isScrollDown
      })
    }

    console.log(offsetY, prevOffsetY, isScrollDown);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.effect = window.VANTA.FOG({
      el: '#background',
      highlightColor: 0x222222,
      midtoneColor: 0x0,
      lowlightColor: 0x111111,
      baseColor: 0x0,
      blurFactor: 0.90,
      speed: 2.00,
      zoom: 0.50
    });
    this.setState({ isMounted: true });
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
              Hey, I am Zander / Zhen - a newgrad UX designer + engineer. 
              <br/>I am interested in impacting communities through engaging design, bold solutions & elegant craftmanship.
            <Secondary>Check my recent works below <span role="img" aria-label="look down">👇</span></Secondary></MyInfo>
          </div>
          
          {this.state.isMounted && 
            <div className={this.state.isScrolled ? 'containerGroup' : 'containerGroup containerGroupDeactivated'}>
              <div className="cardsGroup">
                {staticdata.cats.selected.map((name, index) => 
                  <ScrollAnimation 
                    duration={0.6}
                    offset={50}
                    animateIn={this.state.isScrollDown ? "fadeInUp" : "fadeInDown"} 
                    animateOut={this.state.isScrollDown ? "fadeOutUp" : "fadeOutDown"}  
                    // delay={Math.abs(index - (this.state.visibleIndex[0] ? this.state.visibleIndex[0] : 0 + (this.state.visibleIndex.length / 2))) * 200} 
                    // delay={Math.abs(index - (this.state.lastAppearIndex + this.state.lastDisappearIndex )) * 200}
                    delay={Math.abs(index - (((this.state.isScrollDown ? 1 : -1) * (this.state.lastAppearIndex - this.state.lastDisappearIndex) > 0) ? this.state.lastAppearIndex : this.state.lastDisappearIndex)) * 50}
                    animateOnce={false}
                    afterAnimatedIn={() => {
                      this.setState({ lastAppearIndex: index });
                      console.log("lastAppearIndex:", this.state.lastAppearIndex);
                    }}
                    afterAnimatedOut={() => {
                      this.setState({ lastDisappearIndex: index });
                      console.log("lastDisappearIndex:", this.state.lastDisappearIndex);
                    }}
                  >
                    <Work data={staticdata.works[name]} fromList="selected" /> 
                    {/* <p>{index}</p> */}
                  </ScrollAnimation>
                )}
              </div>
            </div>
          }
        </div>
      </div>
  )
  }
} 

export default IndexPage
