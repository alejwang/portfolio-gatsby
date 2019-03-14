import React from 'react'
import styled from 'styled-components'

const DeviceMockUpGroup = styled.div`
  width: 35%;
  max-width: 350px;
  margin: 50px 80px;
  display: block;
  position: relative;

`

const VideoGroup = styled.div`
  width: 100%;
  position:relative;
  text-align: center;
`

const Video = styled.video`
  left: 50%;
  top: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  position: absolute;
`

const Image = styled.img`
  width: 100%;
  overflow:auto;
`

const Description = styled.p`
  margin-top: 50px;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.65em;
  color: #aaa;
`


const DeviceMockUp = props => (
    <DeviceMockUpGroup>
      <VideoGroup>
        <Video autoPlay loop className="video-mockup1" onclick="this.play()">
          <source src={props.video} type="video/mp4"></source>
        </Video>
        <Image src={require("../images/tide-mobile-device-mockup.png")} alt="" />
      </VideoGroup>
      <Description>{props.text}</Description>
    </DeviceMockUpGroup>
)

export default DeviceMockUp
