import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import staticdata from '../staticdata.json'
import NextNav from './next'

const WorkPageGroup = styled.div`
`

const BannerGroup = styled.div`
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding-top: 80px;

  background: ${props => props.gradient_start};
  background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  @media (max-width: 768px) {
    min-height: 450px;
    padding-top: 62px;
  }
`

const TitleGroup = styled.div`
  width: 50%;
  max-width: 600px;
  margin-left: 60px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 80%;
    margin-left: 42px;
  }
`

const Title = styled.h1`
  position: relative;
  display: inline-block;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`

const WorkPage = props => (
    <WorkPageGroup>
      <Helmet title= {"zander.wang - " + staticdata.works[props.id].title} />
      <BannerGroup image={require("../images/"+props.id+"-cover.png")} gradient_start={staticdata.works[props.id].gradient_start} gradient_end={staticdata.works[props.id].gradient_end}>
        <TitleGroup>
          <Title>{staticdata.works[props.id].title}: {staticdata.works[props.id].text}</Title>
        </TitleGroup>
      </BannerGroup>
      {props.children}
      <NextNav currentPage={props.id} fromList={props.fromList} />
    </WorkPageGroup>
)

export default WorkPage
