import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const WorkCardGroup = styled.div`
    margin:1em 0 1em 0;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    width: auto;

    cursor: url(${require("../images/cursor.png")}), pointer;

    @media (max-width: 1224px) {
        margin:0.6em 0 0.6em 0;
    }
    @media (max-width: 768px) {
        margin:0.6em 3em 0.6em 0;
        width: 100%;
        height: 220px;
        display: block;
        padding-top: 170px;
        margin-bottom: 24px;
    }
`

const Title = styled.h1`
    margin: -0.2em 0 0 0.2em;
    padding-left: 1.5px;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    cursor: url(${require("../images/cursor.png")}), pointer;

    font-weight: 700;
    font-size: 5em;
    line-height: 1em;
    color: white;
    opacity: 1;

    transition: 0.2s;
    -webkit-transition: 0.2s;

    @media (max-width: 1224px) {
        font-size: 6em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
        padding-left: 24px;
        opacity: 1;
        // z-index: 10000;
        text-transform: none;
    }

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            z-index: 1000;
            color: white;
            opacity: 1;
            transform: translateX(-90px);
        }
    }
        
    ${WorkCardGroup}:hover &:after {
        @media (min-width: 768px) {
            width: calc(100% + 60px);
        }
    }
`

const Sub = styled.span`
    // font-family: 'Barlow';
    font-weight: 300;
    font-style: italic;
    font-size: 0.5em;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 0.3em;
    }
`

const Image = styled.div`
    position: absolute;
    width: 46vw;
    height: 90vh;
    // width: 200px;
    // height: 200px;
    left: -46vw;
    top: -250px;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // border-radius: 24px;
    // border-radius: 375px;
    z-index: 10;
    pointer-events: none;

    background: ${props => props.gradient_start};
    background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
    background-repeat: no-repeat;
    background-position: 54% bottom;
    object-fit: cover;
    transition: 0.4s;
    opacity: 0;
    overflow: hidden;

    @media (max-width: 1224px) {
        width: 400px;
        height: 600px;
        right: -44px;
        top: -69px;
        background-size: cover;
        
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 220px;
        border-radius: 16px;
        left: 0;
        top: 0;
        // margin: 10px 0 50px calc(-500%/90);
        z-index: 0;
        opacity: 1;   
    }

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            // width: 750px;
            // height: 750px;
            z-index: 100;
            // transform: translate(30px, 45px);
            background-position: center bottom;
            opacity: 1;
        }
    }
`

const No = styled.span`
    margin: 0;
    padding:0 0.5em 0.2em 0;
    position: relative;
    height: 1em;
    width: 1em;
    line-height: 1em;
    text-align: right;

    display: inline-block;

    // font-family: 'Barlow';
    text-transform: lowercase;
    font-size: 0.2em;
    
    color: white;
    opacity: 0.5;
    writing-mode: tb-rl;

    @media (max-width: 768px) {
        display: none;
    }
`

const Icon = styled.i`
    position: absolute;
    right: 40px;
    top: 0;
    font-size: 0.5em;
    line-height: 2em;
    transition: 0.4s;
    opacity: 0;

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            transform: translateX(120px);
            opacity: 0.3;
        }
    }
`

class Work extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <WorkCardGroup onMouseEnter={() => this.props.onHoverHandler(this.props.index)} onMouseLeave={() => this.props.onHoverHandler(-1)}>
        <AniLink cover
          to={'/' + this.props.data.id}
          state={{ fromList: this.props.fromList }}
          direction="down"
          bg="#111111"
          duration={1}>
          <Title>
            <No>{this.props.data.year % 100}</No>
            {/* {props.data.title_short ? props.data.title_short : props.data.title} */}
            {this.props.data.title}
            <Sub>{this.props.data.sub}</Sub>
            <Icon className="fas fa-arrow-right" />
          </Title>
          <Image image={require("../images/"+(this.props.data.id==="#"?"default":this.props.data.id)+"-cover.png")} gradient_start={this.props.data.gradient_start} gradient_end={this.props.data.gradient_end} />
        </AniLink>
      </WorkCardGroup>
    )
  }
}

export default Work
