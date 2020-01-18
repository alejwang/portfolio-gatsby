import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'



const WorkCardGroup = styled.div`
    flex: 0 1 auto;
    max-width: 33.3%;

    box-sizing: border-box;
    padding: 18px;
    position: relative;

    cursor:  ${props => props.isClickable ? "pointer" : "auto"};
    pointer-events:  ${props => props.isClickable ? "auto" : "none"};   

    opacity: ${props => props.isFiltered ? "1" : "0"};
    height: ${props => props.isFiltered ? "auto" : "0"};
    order: ${props => props.isFiltered ? "1" : "99"};

    @media (max-width: 1600px) {;
        max-width: 50%;
    }

    @media (max-width: 768px) {
        flex: none;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: 2px;
    }

`

const Info = styled.div`
    position: relative;

    @media (max-width: 768px) {
        position: absolute;
        padding: 18px;
        bottom: 0;
        left: 0;
        z-index: 1000;
    }
`

const Title = styled.h1`
    position: relative;
    padding-top: 10px;
    cursor: pointer;
    display: inline-block;

    font-weight: 700;
    font-size: 1em;
    line-height: 20px;
    vertical-align: middle;
    color: white;
    opacity: 0.6;

    transition: 0.4s;
    -webkit-transition: 0.4s;

    &:after {
        content: "·";
        opacity: 0.2;
        display: inline-block;
        padding: 0 12px 0 9px;
    }

    @media (max-width: 768px) {
        opacity: 1;
    }

    ${WorkCardGroup}:hover & {
        opacity: 1;
    }
`

const Icon = styled.img`
    width: 19px;
    height: 19px;
    vertical-align: bottom;
    opacity: 0.1;

    ${WorkCardGroup}:hover & {
        opacity: 0.2;
    }
`

const Sub = styled.p`
    display: block;
    padding-top: 4px;
    margin: 0;
    
    font-weight: 400;
    font-size: 1em;
    line-height: 1.15em;
    color: white;
    opacity: 0.3;
    text-decoration: none;

    @media (max-width: 768px) {
        opacity: 0.5;
    }
`

const Image = styled.img`
    width: 100%;
    height: auto;

    background: linear-gradient(to bottom, ${props => props.gradient_start} 0%, ${props => props.gradient_end} 100%);
    background-size:1px 200%;  

    transition: 0.2s;
    filter:  ${props => props.isClickable ? "none" : "grayscale(100%)"};
    opacity:  ${props => props.isClickable ? "1" : "0.5"};

    @media (max-width: 768px) {
        background-position: 200%;  
    }

    ${WorkCardGroup}:hover & {
        background-position: 200%;  
    }
`

const Video = styled.video`
    width: 100%;
    margin: 0;
    padding: 0;

    -webkit-filter: brightness(80%);
    -moz-filter: brightness(80%);
    -ms-filter: brightness(80%);
    -o-filter: brightness(80%);
    filter: brightness(80%);
    transition: filter 0.2s;

    @media (max-width: 768px) {
        filter: none;
    }

    ${WorkCardGroup}:hover & {
        -webkit-filter: brightness(1);
        -moz-filter: brightness(1);
        -ms-filter: brightness(1); 
        -o-filter: brightness(1);
        filter: brightness(1); 
    }
`



class Work extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <WorkCardGroup isClickable={!this.props.data.tbd} isFiltered={this.props.isFiltered}>
        <AniLink cover
          to={ this.props.data.tbd ? '#' : '/' + this.props.data.id } 
          state={{ fromList: this.props.fromList }}
          direction="down"
          bg="#111111"
          duration={1}>
            {this.props.data.usingVideoAsCover ? 
                <Video src={require("../videos/"+this.props.data.id+"-cover-v5.mp4")} preload="auto" autoPlay muted loop playsinline webkit-playsinline></Video> 
            :
                <Image isClickable={!this.props.data.tbd} src={require("../images/"+(this.props.data.id==="#"?"default":this.props.data.id)+"-cover-v5.png")} gradient_start={this.props.data.gradient_start} gradient_end={this.props.data.gradient_end} />
            }
            <Info>
                <Title>{this.props.data.tbd && 'Coming Soon -'} {this.props.data.title} </Title>
                <Icon src={require("../images/icons/"+(this.props.data.cat)+".png")}/>
                <Sub>{this.props.data.subtitle}</Sub> 
            </Info>
        </AniLink>
      </WorkCardGroup>
    )
  }
}

export default Work
