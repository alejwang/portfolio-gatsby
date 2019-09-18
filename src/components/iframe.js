import React from 'react'
import styled from 'styled-components'

export const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  margin: 150px auto;
  @media (max-width: 768px) {
    margin: 80px auto;
  }
`


const IFrameVideo = props => (
    <Container>
      <IFrame width="560" height="315" src={props.src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </Container>
)

export default IFrameVideo
