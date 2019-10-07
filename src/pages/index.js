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

const Secondary = styled.span`
    margin: 0.5em 0 0 0;
    padding: 0;
    font-size: 1em; 
    font-weight: 400;
    color: #888;
    background: none;
    display: block;
    @media (max-width: 1224px)  {
      font-size: 1em; 
    }
    @media (max-width: 768px) {
      font-size: 1em; 
      margin: 0.8em 0 0 0;
      background: none;
    }
`

const Loader = styled.div`
    &:empty {
      position: absolute;
      top: calc(50% - 4em);
      left: calc(50% - 4em);
      width: 6em;
      height: 6em;
      border: 1.1em solid rgba(0, 0, 0, 0.2);
      border-left: 1.1em solid #000000;
      border-radius: 50%;
    }
`

function asyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      isScrolled: false,
      prevOffsetY: 0,
      isScrollDown: true,
      lastAppearIndex: 0,
      lastDisappearIndex: 0
    }
  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 500)) // 0.5 seconds
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
    // console.log(offsetY, prevOffsetY, isScrollDown);
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
    asyncCall().then(() => this.setState({ isMounted: true }));
  }
  
  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }
  
  render() {
    const { isMounted } = this.state;
    // if(!isMounted) { // if your component doesn't have to wait for an async action, remove this block 
    //   return null; // render null when app is not ready
    // }
    return (
      <Loader>
        <div id="background"> </div>
        <div className="container">
          <div className="containerGroup">
            <MyInfo>
              Hey, I am Zander / Zhen - a newgrad UX designer + engineer. 
              <br/>I am interested in impacting communities through engaging design, bold solutions & elegant craftmanship.
              {isMounted ? <Secondary>Check my recent works below <span role="img" aria-label="look down">👇</span></Secondary> : <Secondary>Loading... <span role="img" aria-label="yeah">✨</span></Secondary>}
            </MyInfo>
          </div>
          
          {isMounted && 
            <div className={this.state.isScrolled ? 'containerGroup' : 'containerGroup containerGroupDeactivated'}>
              <div className="cardsGroup">
                {staticdata.cats.selected.map((name, index) => 
                  <ScrollAnimation 
                    key={index}
                    duration={0.6}
                    offset={10}
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
      </Loader>
  )
  }
} 

export default IndexPage
