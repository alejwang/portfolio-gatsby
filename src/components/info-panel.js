import React from 'react'
import styled from 'styled-components'

const BannerGroup = styled.div`
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding: 200px 0 0 calc(48px + 2em + 10%);
  /* text-align: center; */

  background: #153c88;
  background-image: url(${props => props.image}), linear-gradient(to bottom, #153c88 25%,#3068e8 100%);
  background-repeat: no-repeat;
  background-position: right center;
`

const Title = styled.h1``

const Subtitle = styled.h2``

const InfoPanelGroup = styled.div`
  width: 80%;
  height:auto;
  margin: 0 10%;
  box-sizing: border-box;
  padding: 80px 0 80px calc(48px + 2em);
  overflow:auto;
`
const InfoGroup = styled.div`
  min-width: 14%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
`
const InfoTitle = styled.h6``

const InfoText = styled.p`
  margin: 0;
  color: #aaa;
`

const MainText = styled.p`
  display: block;
  width: 55%;
  float: right;
  margin: 0;
`

const InfoPanel = props => (
  <div>
    <BannerGroup image={props.image}>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>;
    </BannerGroup>
    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Internship</InfoTitle>
        <InfoText>2018</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Company + Team</InfoTitle>
        <InfoText>Ant Finiancial <br/> K.P. Wang - Mentor <br /> Huajing Jin - Supervisor</InfoText>
      </InfoGroup>
      <MainText>
      In the 2018 summer, I spent a wonderful time in Ant Financial (Alibaba). 
      I was lucky to work in Alipay Design team with talented colleagues together to bring more ideas come to life for our users. 
      During my internship, I worked on developing two new projects and improving one launched project. 
      Due to the NDA, I can only share my experience here without any details of unreleased projects.
      <br/>
      My Role: Create design concepts IA, user flows, wireframe and also prototypes.
      Work with government, researchers and developers to launch the project and establish evaluation methods.
      Spend my free time working on motion design and usability testing on cross-devices prototype.
      </MainText>
    </InfoPanelGroup>
  </div>
)

export default InfoPanel