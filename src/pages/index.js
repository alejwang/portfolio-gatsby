import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Landing = styled.div`
    display: block;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 85vh;
    min-height: 500px;
    margin: 0;
    padding: 36px; 
    background: rgba(255, 255, 255, 0.05);
`

const MyInfo = styled.p`
    position: relative;
    padding-left: calc(50% + 18px);
    margin: 0;
    font-weight: 400;
    font-size: 1em; 
    line-height: 1.5;
    letter-spacing: 0.1px;

    color: #888;

    @media (max-width: 1224px)  {
      font-size: 1.2em; 
    }

    @media (max-width: 768px) {
        padding-left: 0;
        margin-top: 100px;
    }
`

const BigText = styled.img`
    position: absolute;
    bottom: 0;
    left: -5px;
    width: 102%;
    opacity: 0.75;
`

const ScrollIndicator = styled.p`
    position: absolute;
    width: 100%;
    bottom: 3vw;
    left: 0;
    padding: 0 36px 0 calc(50% + 54px);
    margin: 0;
    font-weight: 400;
    font-size: 1em; 
    letter-spacing: 0.1px;
    opacity: 0.4;
    overflow: hidden;

    &:after {
      opacity: 0.5;
      content: " ";
      display: inline-block;
      height: 0.75em;
      vertical-align: bottom;
      width: 100%;
      margin-right: -100%;
      margin-left: 10px;
      border-top: 1px solid white;
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

const Image = styled.img`
  width: 50vw;
  // max-width: 1600px;
  height: auto;
  margin: 0 auto;
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  display:block;
  overflow:auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Grid = styled.div`
  width: 100%;
  padding: 18px;
  margin-bottom: 200px;
  box-sizing: border-box;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;

  @media (max-width:768px) {
    padding: 0;
  }
`

function asyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
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
      lastDisappearIndex: 0,
      hoverOnIndex: -1
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
    // console.log(offsetY, prevOffsetY, isScrollDown);
  }

  // handleHover = (index) => {
  //   this.setState({ hoverOnIndex: index });
  //   console.log('hover', index);
  //   console.log('image', (this.state.hoverOnIndex == -1 ? "default" : staticdata.cats.selected[this.state.hoverOnIndex]) + "-cover.png");
  // }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
    // this.effect = window.VANTA.FOG({
    //   el: '#background',
    //   highlightColor: 0x3446ca,
    //   midtoneColor: 0x54bcdc,
    //   lowlightColor: 0xf09f2d,
    //   baseColor: 0xeb7ba9,
    //   speed: 1.40,
    //   zoom: 0.40
    // });
    asyncCall().then(() => this.setState({ isMounted: true }));
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }

  render() {
    const { isMounted } = this.state;

    return (
      <Loader>
          {/* {isMounted ? <Secondary>Check my recent works below <span role="img" aria-label="look down">👇</span></Secondary> : <Secondary>Loading... <span role="img" aria-label="yeah">✨</span></Secondary>} */}
        <Landing>
          <MyInfo>
            I am a newgrad UX designer + engineer crafting engaging design, elegant solutions & playful enjoyments. Past stints include CRN, Ant Financial, QSC & Zhimou Tech. Currently I work for myself. <br/><br/>
            Besides work, you may find me writing, grazing at bubble tea shops, and acting stupid. If you want to tell your story or hear some of mine, don’t hesitate to find me via <a href="mailto:me@zander.wang?Subject=Hello%20Zander" target="_top">Email</a>, <a href="https://www.instagram.com/alejwang/" target="_top">Instagram</a> or <a href="https://www.linkedin.com/in/alejwang/">LinkedIn</a>. Alternatively, click to get my resume.
            {/* TODO: RESUME */}
          </MyInfo>
          <ScrollIndicator>Scroll down to see my projects</ScrollIndicator>
          <BigText src={require("../images/big-text.svg")} />
        </Landing>

        {isMounted &&
          // <div className={this.state.isScrolled ? 'containerGroup' : 'containerGroup containerGroupDeactivated'}>
          <Grid>
            {staticdata.cats.selected.map((name, index) =>
              <Work onHoverHandler={this.handleHover} index={index} data={staticdata.works[name]} fromList="selected" />
            )}
          </Grid>
          // </div>
        }

      </Loader >
    )
  }
}

export default IndexPage
