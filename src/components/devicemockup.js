import React from 'react'
import styled from 'styled-components'

const DeviceMockUpGroup = styled.div`
  width: ${props => props.macbook ? "100%" : "35%"};
  max-width: ${props => props.macbook ? "1440px" : "350px"};
  margin: 50px 80px;
  display: block;
  position: relative;
  @media (max-width: 768px) {
    width: ${props => props.macbook ? "90%" : "80%"};
    margin: 0 20px 80px 20px;
  }
`

const VideoGroup = styled.div`
  width: 350px;
  height: ${props => props.iphonex ? "747px" : "725px"};
  position:relative;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const VideoGroupMacbook = styled.div`
  width: 100%;
  // height: 100%;
  position:relative;
  text-align: center;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Video = styled.video`
`

const Image = styled.img`
  width: 100%;
  overflow:auto;
  position: relative;
  z-index:30000;
  left: 0;
  top: 0;
  user-drag: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

const Description = styled.p`
  margin-top: 50px;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.65em;
  color: #aaa;
`


const DeviceMockUp = props => (
    <DeviceMockUpGroup {...props}>
      {props.iphonex &&  
        <VideoGroup>
          <Video autoPlay loop className="video-mockupx" onclick="this.play()">
            <source src={props.video} type="video/mp4"></source>
          </Video>
          <Image src = {require("../images/mockup-iphonex.png")} alt="iPhone X Mockup" />
        </VideoGroup>
      }
      {props.iphone8 &&  
        <VideoGroup>
          <Video autoPlay loop className="video-mockup1" onclick="this.play()">
            <source src={props.video} type="video/mp4"></source>
          </Video>
          <Image src = {require("../images/mockup-iphone8.png")} alt="iPhone 8 Mockup" />
        </VideoGroup>
      }
      {props.macbook &&  
        <VideoGroupMacbook>
          <Video autoPlay loop controls className="video-mockup-macbook" onclick="this.play()">
            <source src={props.video} type="video/mp4"></source>
          </Video>
          <Image src = {require("../images/mockup-macbook.png")} alt="Macbook Mockup" />
        </VideoGroupMacbook>
      }

      <Description>{props.text}</Description>
    </DeviceMockUpGroup>
)

export default DeviceMockUp
