import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import resumePdf from "../files/Zander_Wang_Resume.pdf"



const Loader = styled.div`
  background: #16171B;
  position: relative;
`

const Landing = styled.div`
    display: block;
    box-sizing: border-box;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    min-height: 500px;
    margin: 0;
    padding: 36px; 

    transition: 0.5s;
    will-change: opacity, top;
    opacity: ${props => props.isScrolled ? "0" : "1"};
    pointer-events: ${props => props.isScrolled ? "none" : "auto"};
    top: ${props => props.isScrolled ? "-20vh" : "0"};

    @media (max-width: 768px) {
      padding: 18px;
      margin-bottom: 5px;
    }
`

const Blurrer = styled.div`
    display: block;
    width: 100%;
    height: 120vh;
    pointer-events: none;
    position: fixed;
    z-index: 999;
    background: linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 100%);

    transition: 1s linear;
    opacity: ${props => props.isScrolled ? "0" : "1"};
    pointer-events: ${props => props.isScrolled ? "none" : "auto"};
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

    @media (max-width: 768px) {
        padding-left: 0;
        margin-top: 64px;
    }
`


const ScrollIndicator = styled.p`
    display: none;
    position: absolute;
    width: 100%;
    bottom: 5vw;
    left: 0;
    padding: 0 36px 0 calc(50% + 54px);
    box-sizing: border-box;
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

    @media (max-width: 768px) {
      padding-left: 18px;
      opacity: 0.8;
    }
`

const Grid = styled.div`
  width: 100%;
  padding: 18px 18px 120px 18px;
  box-sizing: border-box;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;

  transition: ${props => props.isScrolled? "opacity 0.3s linear, filter 0.6s cubic-bezier(0.86, 0, 0.07, 1), transform 0.6s cubic-bezier(0.86, 0, 0.07, 1)" : "0.3s cubic-bezier(0.23, 1, 0.32, 1)" };  
  -webkit-filter: ${props => props.isScrolled ? "blur(0)" : "blur(20px)"};
  -o-filter: ${props => props.isScrolled ? "blur(0)" : "blur(20px)"};
  -moz-filter: ${props => props.isScrolled ? "blur(0)" : "blur(20px)"};
  -ms-filter: ${props => props.isScrolled ? "blur(0)" : "blur(20px)"};
  filter: ${props => props.isScrolled ? "blur(0)" : "blur(20px)"};
  transform: ${props => props.isScrolled ? "scale3d(1,1,1) translate3d(0px, 0px, 0px)" : "scale3d(0.9, 0.9, 0.9) translate3d(0px, 100px, 0px)"};;

  // transition: opacity 0.3s;
  opacity: ${props => props.isReloading ? "0" : "1"};

  @media (max-width:768px) {
    padding: 0;
  }
`

const Preloader = styled.div`
  width: 100%;
  height: 100vh;
  background: black url(${require("../images/logo-preload.svg")}) no-repeat fixed center;
  position: fixed;
  z-index: 9999;
  pointer-events: none;

  transition: 0.4s 1s;
  opacity: ${props => props.isMounted ? "0" : "1" };

  &:before {
    content: "";
    left: 0;
    bottom: 0;
    width: 100%;
    background: url(${require("../images/logo-preload-finish.svg")}) no-repeat fixed center;
    position: fixed;
    z-index: 3000;

    transition: 1s cubic-bezier(0.86, 0, 0.07, 1);
    height: ${props => props.isMounted ? "calc(50vh + 120px)" : "calc(50vh - 120px)" };
  }

  @media (max-width:768px) {
    display: none;
  }
`

const HeaderSecondary = styled.div`
  display: block;
  position: fixed;
  width: calc(16.6% - 42px);
  top: 0;
  z-index: 500;
  padding: 36px 0 36px calc(16.6% + 30px);

  transition: 0.4s opacity;
  opacity: ${props => props.isScrolled ? "1" : "0"};

  &:before {
    content: " ";
    display: inline-block;
    position: absolute;
    right: calc(50% - 18px);
    bottom: 50%;
    height: 1px;
    vertical-align: bottom;
    width: calc(50% - 50px);
    border-bottom: 1px solid white;

    transition: 0.4s opacity;
    opacity: ${props => props.isScrolledAlot ? "0.2" : "0"};
  }

  @media (max-width: 1600px) {
    width: calc(25% - 45px);
    padding: 36px 0 36px calc(25% + 27px);
  }

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    padding: 18px;
    text-align: right;
    margin-bottom: 20vh;
    background: rgba(22, 23, 27, 0.5);

    &:before {
      display: none;
    }
  }
`

const Nav = styled.p`
  display: inline-block;
  margin: 0;
  padding-right: 16px;
  line-height: 1em;

  a {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #eee;
  } 

  @media (max-width: 768px) {
    padding: 0 0 0 16px;
  }
`

const ViewBy = styled.div`
  display: inline-block;
  width: calc(16.6% - 42px);
  color: #888;
  padding: 300px 0 0 36px;
  font-size: 0.85em;
  line-height: 1.6em;

  transition: 0.4s opacity;
  opacity: ${props => props.isScrolled ? "1" : "0.1"};

  & + & {
    width: auto;
  }

  @media (max-width: 1600px) {
    width: calc(25% - 45px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding:300px 18px 18px 18px;
    & + & {
      padding: 18px;
    }
  }
`

const Option = styled.p`
  display: inline-block;
  margin: 0;
  cursor: pointer;
  line-height: 1em;
  color: ${props => props.isActive ? '#ddd' : '#666'};
  // font-weight: ${props => props.isActive ? '700' : '400'};

  &:after {
    content: "/";
    // font-weight: 400;
    color: #666;
    padding: 0 8px;
  }

  &:last-child:after {
    content: "";
  }
`


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
      isScrolled: false,
      isScrolledAlot: false,
      isViewSelected: false,
      filteredByOption: "all",
      isReloading: false
    }
  }

  handleScroll = (event) => {
    const offsetY = window.pageYOffset;
    if (offsetY > 400) {
      this.setState( { isScrolled: true, isScrolledAlot: true })
    } else if (offsetY > 10) {
      this.setState( { isScrolled: true, isScrolledAlot: false })
    } else {
      this.setState( { isScrolled: false, isScrolledAlot: false })
    }
  }

  handleFilter(type, value) {
    this.setState({ isReloading: true });
    new Promise((resolve) => setTimeout(() => resolve(), 500)).then(
      () => {
        if (type === 'selected') {
          this.setState({ isViewSelected: value })
        } else if (type === 'cat') {
          this.setState({ filteredByOption: value })
        }
        this.setState({ isReloading: false });
      })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    new Promise((resolve) => setTimeout(() => resolve(), 500)).then(() => this.setState({ isMounted: true }));
  }

  render() {
    const { isMounted, isScrolled, isScrolledAlot, isViewSelected, filteredByOption, isReloading } = this.state;

    return (
      <Loader>
        <Preloader isMounted={isMounted}>
          <ScrollIndicator>Loading resources</ScrollIndicator>
        </Preloader>
        <Landing isScrolled={isScrolled}>
          <MyInfo>
            I am a new grad UX designer + engineer crafting engaging design, elegant solutions & playful enjoyments. Past stints include CRN, Ant Financial, QSC & Zhimou Tech. Currently, I work for myself. <br/><br/>
            Besides work, you may find me writing, grazing at bubble tea shops, and acting stupid. If you want to tell your story or hear some of mine, don’t hesitate to find me via <a href="mailto:me@zander.wang?Subject=Hello%20Zander" target="_top">Email</a>, <a href="https://www.instagram.com/alejwang/" target="_top">Instagram</a> or <a href="https://www.linkedin.com/in/alejwang/">LinkedIn</a>. Alternatively, click to <a href={resumePdf}>get my resume</a>.
            {/* TODO: RESUME */}
          </MyInfo>
          <ScrollIndicator>Scroll down to see my projects</ScrollIndicator>
          
        </Landing>
        <Blurrer isScrolled={isScrolled}/>
        <HeaderSecondary isScrolled={isScrolled} isScrolledAlot={isScrolledAlot} >
          <Nav><AniLink cover to="/about" direction="down" bg="#111">About</AniLink></Nav>
          <Nav><a href={resumePdf}>Resume</a></Nav>
        </HeaderSecondary>
        <ViewBy isScrolled={isScrolled}>
          View <br/>  
          <Option isActive={!isViewSelected} onClick={(e) => this.handleFilter('selected', false)}>All</Option>
          <Option isActive={isViewSelected} onClick={(e) => this.handleFilter('selected', true)}>Selected</Option>
        </ViewBy>
        <ViewBy isScrolled={isScrolled}>
          Filter <br/>  
          <Option isActive={ filteredByOption==='all' } onClick={(e) => this.handleFilter('cat', 'all')}>All</Option>
          <Option isActive={ filteredByOption==='web' } onClick={(e) => this.handleFilter('cat', 'web')}>Web</Option>
          <Option isActive={ filteredByOption==='mobile' } onClick={(e) => this.handleFilter('cat', 'mobile')}>Mobile</Option>
          <Option isActive={ filteredByOption==='vis' } onClick={(e) => this.handleFilter('cat', 'vis')}>Vis</Option>
          <Option isActive={ filteredByOption==='arch' } onClick={(e) => this.handleFilter('cat', 'arch')}>Arch</Option>
        </ViewBy>
        <Grid isScrolled={isScrolled} isReloading={isReloading}>
          {Object.keys(staticdata.works).map((id, index) => staticdata.works[id].hidden ||
            <Work index={index} data={staticdata.works[id]} 
            isFiltered={((staticdata.works[id].selected === isViewSelected) || !isViewSelected) && (staticdata.works[id].cat === filteredByOption || filteredByOption === "all")} 
            fromList={isViewSelected ? "selected" : filteredByOption} />
          )}
        </Grid>
      </Loader>
    )
  }
}

export default IndexPage
