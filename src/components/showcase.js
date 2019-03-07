import React from 'react'
import styled from 'styled-components'

const ShowcaseGroup = styled.div`
  width: 80%;
  height: auto;
  margin: 0 10%;
  box-sizing: border-box;
  padding: 75px 0 75px calc(48px + 2em);
  overflow:auto;
`

const ImageGroup = styled.div`
  width: 50%;
  height: 0;
  padding-bottom: 50%;
  background: url(${require("../images/showcase-dots.png")}) no-repeat;
  background-clip: border-box;
  background-size: cover;
`

const Image = styled.img`
  width: 50%;
  top: 25%;
  left: 25%;
  display: block;
  position: relative;

`

const Showcase = props => (
  <ShowcaseGroup>
    <ImageGroup>
      <Image src={require("../images/alipay-cover.png")} /> 
    </ImageGroup>
  </ShowcaseGroup>
)

export default Showcase