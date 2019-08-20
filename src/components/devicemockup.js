import React from 'react'
import styled from 'styled-components'

const DeviceMockUpGroup = styled.div`
  width: 35%;
  max-width: 350px;
  margin: 50px 80px;
  display: block;
  position: relative;
  @media (max-width: 768px) {
    width: auto;
  }
`

const VideoGroup = styled.div`
  width: 350px;
  height: ${props => props.iphonex ? "747px" : "725px"};
  position:relative;
  text-align: center;
`

const Video = styled.video`
`

const Image = styled.img`
  width: 100%;
  overflow:auto;
  position: absolute;
  z-index:300000;
  left: 0;
  top: 0;
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
        <Video autoPlay loop className={props.iphonex ? "video-mockupx" : "video-mockup1"} onclick="this.play()">
          <source src={props.video} type="video/mp4"></source>
        </Video>
        <Image src = {props.iphonex ? require("../images/iphone-x-wireframe-new.png") : require("../images/tide-mobile-device-mockup.png")} alt="" />
      </VideoGroup>
      <Description>{props.text}</Description>
    </DeviceMockUpGroup>
)

export default DeviceMockUp
