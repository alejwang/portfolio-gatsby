import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import staticdata from '../staticdata.json'
import NextNav from './next'

const WorkPageGroup = styled.div`
`

const BannerGroup = styled.div`
  width: 100%;
  min-height: 750px;
  box-sizing: border-box;
  padding-top: 280px;

  background: ${props => props.gradient_start};
  background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
  background-repeat: no-repeat;
  ${'' /* background-size: cover; */}
  background-position: right bottom;

  @media (max-width: 1224px) {
    min-height: 500px;
    padding-top: 150px;
    background-position: center center;
    background-size: cover;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding-top: 220px;
  }
`

const TitleGroup = styled.div`
  width: 90%;
  max-width: 1600px;
  margin: 0 auto;
  padding-left: calc(48px + 2em);
  // padding-top: 120px;
  box-sizing: border-box;

  @media (max-width: 1224px) {
    padding-left: 0;
    // padding-top: 0px;
  }
`

const Title = styled.h1`
    margin: 0 0 -0.2em 0;

    position: relative;
    display: inline-block;
    z-index: 10;

  @media (max-width: 768px) {
    font-size: 2.5em;
    padding-left: 10px;

    &:after {
        content: " ";
        width: calc(100% + 15px);
        height:0.3em;
        bottom: 0.5em;
        left: 0px;
        margin: 0;

        position: absolute;
        z-index: -1;
        display: inline-block;
        vertical-align: middle;
        transition: 0.6s;

        background: #222;
    }
  }
`

const Subtitle = styled.h2`
  display: none;
  @media (max-width: 768px) {
    display: none;
  }
`

const WorkPage = props => (
    <WorkPageGroup>
      <Helmet title= {"zander.wang - " + staticdata.works[props.id].title} />
      <BannerGroup image={require("../images/"+props.id+"-cover.png")} gradient_start={staticdata.works[props.id].gradient_start} gradient_end={staticdata.works[props.id].gradient_end}>
        <TitleGroup>
          <Subtitle>{staticdata.works[props.id].cat}</Subtitle>

          <Title>{staticdata.works[props.id].title}</Title>
        </TitleGroup>
      </BannerGroup>
      {props.children}
      <NextNav currentPage={props.id} fromList={props.fromList} />
    </WorkPageGroup>
)

export default WorkPage
