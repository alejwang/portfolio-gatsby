import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const WorkCardGroup = styled.div`
    flex: 0 1 33.3%;
    max-width: 33.3%;
    box-sizing: border-box;
    padding: 18px;
    cursor: pointer;
    position: relative;

    @media (max-width: 1600px) {
        flex: 0 1 50%;
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

    background: linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
    background-size:1px 300%;  


    -webkit-filter: grayscale(25%);
    -moz-filter: grayscale(25%);
    -ms-filter: grayscale(25%);
    -o-filter: grayscale(25%);
    filter: grayscale(25%);
    transition: 0.2s;

    @media (max-width: 768px) {
        -webkit-filter: none;
        -moz-filter: none;
        -ms-filter: none;
        -o-filter: none;
        filter: none;
        background-position: 300%;  
    }

    ${WorkCardGroup}:hover & {
        background-position: 300%;  
        -webkit-filter: grayscale(0); 
        -moz-filter: grayscale(0); 
        -ms-filter: grayscale(0); 
        -o-filter: grayscale(0); 
        filter: grayscale(0); 
    }
`

const Video = styled.video`
    width: 100%;
    margin: 0;
    padding: 0;

    -webkit-filter: grayscale(50%);
    -moz-filter: grayscale(50%);
    -ms-filter: grayscale(50%);
    -o-filter: grayscale(50%);
    filter: grayscale(50%);
    transition: filter 0.2s;

    @media (max-width: 768px) {
        filter: none;
    }

    ${WorkCardGroup}:hover & {
        -webkit-filter: grayscale(0); 
        -moz-filter: grayscale(0); 
        -ms-filter: grayscale(0); 
        -o-filter: grayscale(0); 
        filter: grayscale(0); 
    }
`



class Work extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <WorkCardGroup>
        <AniLink cover
          to={'/' + this.props.data.id}
          state={{ fromList: this.props.fromList }}
          direction="down"
          bg="#111111"
          duration={1}>
            {this.props.data.usingVideoAsCover ? 
                <Video src={require("../videos/"+this.props.data.id+"-cover.mp4")} preload="auto" autoPlay muted loop playsinline webkit-playsinline></Video> 
            :
                <Image src={require("../images/"+(this.props.data.id==="#"?"default":this.props.data.id)+"-cover-v5.png")} gradient_start={this.props.data.gradient_start} gradient_end={this.props.data.gradient_end} />
            }
            <Info>
                <Title>{this.props.data.title} </Title>
                <Icon src={require("../images/icons/"+(this.props.data.cat)+".png")}/>
                <Sub>{this.props.data.subtitle}</Sub>
            </Info>
        </AniLink>
      </WorkCardGroup>
    )
  }
}

export default Work
