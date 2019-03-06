import React from 'react'
import styled from 'styled-components'

const InfoPanelGroup = styled.div`
  width: 80%;
  margin: 0 10%;
  box-sizing: border-box;
  padding: 75px 0 75px calc(48px + 2em);
`

const InfoGroup = styled.div`
  min-width: 15%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
`
const InfoTitle = styled.h6`
  
`

const InfoText = styled.p``

const MainText = styled.p``


const InfoPanel = props => (
  <InfoPanelGroup>
    <InfoGroup>
      <InfoTitle>Internship</InfoTitle>
      <InfoText>2018</InfoText>
    </InfoGroup>
    <InfoGroup>
      <InfoTitle>Company</InfoTitle>
      <InfoText>Ant Finiancial</InfoText>
    </InfoGroup>
    <MainText>
      blablabla
    </MainText>
  </InfoPanelGroup>
)

export default InfoPanel