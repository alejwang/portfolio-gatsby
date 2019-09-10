import React from 'react'
import WorkPage from '../components/workpage'

import { ChapterTitle, SectionForImages, SectionForImagesFlex, ImageText, NoteText, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';
import DeviceMockUp from '../components/devicemockup'



const workId = 'alipay' 

const Alipay = ({ location }) => (
  <WorkPage id={workId} fromList={(location.state && location.state.fromList) != undefined ? location.state.fromList : "selected"}> 
    <InfoPanelGroup>
        <InfoGroup>
          <InfoTitle>Internship</InfoTitle>
          <InfoText>2018</InfoText>
        </InfoGroup>
        <InfoGroup>
          <InfoTitle>Company + Team</InfoTitle>
          <InfoText><a href="https://www.antfin.com/index.htm?locale=en_US">Ant Financial<span className="linkarrow">></span></a><br/> <a href="https://global.alipay.com/index.htm">Alipay App<span className="linkarrow">></span></a> <br/> K.P. Wang - Mentor <br /> Huajing Jin - Supervisor</InfoText>
        </InfoGroup>
        <MainText>
          Mobile payments in the city service era - what I learned from working for Alipay in Ant Financial.
        </MainText>
        <MainText>
          In the 2018 summer, I spent a wonderful time in Ant Financial (Alibaba). 
          I was lucky to work in Alipay Design team with talented colleagues together to bring more ideas to come true. 
          During my internship, I worked on developing two new projects and improving one launched project.
        </MainText>
        <MainText>
          My Role: <br/>
          Create design concepts, IA, user flows, wireframe, and also prototypes.<br/>
          Work with government, researchers, and developers to launch the project and establish evaluation methods.<br/>
          Spend my free time working on motion design and usability testing on a cross-device prototype.
        </MainText>
        <NoteText>
          Due to NDA, I can't reveal all my work details.
        </NoteText>
    </InfoPanelGroup>

    <Image src={require("../images/alipay-timeline.png")} /> 

    <Section>
      <ChapterTitle>Project one</ChapterTitle>
      <SectionTitle>Social Insurance Payment Platform: worked with senoir designers, developers, governments, and other teams, we launched this project at August 2018. Citizens in several cities to register their social insurance and pay the bills online - no need to wait in line or talk with agencies.</SectionTitle>
    </Section>

    <SectionForImagesFlex lesspadding>
      <DeviceMockUp iphonex video={require("../images/alipay-ins2.mp4")} text="Entrance - Citizens can register and change their insurance plan in the app by several clicks."/>
      <DeviceMockUp iphonex video={require("../images/alipay-ins1.mp4")} text="Business dashboard - Insurance managers can host a group of people profile online, and pay for their insurance."/>
      <DeviceMockUp iphonex video={require("../images/alipay-ins3.mp4")} text="Scan to pay - If users receive an overdate bill, they can simply scan the barcode to check billing detail and pay online."/>
    </SectionForImagesFlex>

    <SectionForImages>
      <Image src={require("../images/alipay-diagram.png")} /> 
      <ImageText>
        The final version workflow diagram showing all components we use and reuse, and all details about parameters in designs. This diagram benefits the communication between designer and developer, and another platform team.
      </ImageText>
      <ImageText>
        Since the work flow chart covers all the pages and components, it's easy for future usage - when another city use this feature with unique needs, developers only need to set some parameters for current interface and add some single pages.
      </ImageText>
      <ImageText>
        Powered by <a href="https://whimsical.com">Whimsical<span className="linkarrow">></span></a> .
      </ImageText>
    </SectionForImages>

    <Section>
      <ChapterTitle>Other Projects</ChapterTitle>
      <SectionTitle>Using my work time and free time, I also worked on brainstorming new ideas and some motion designs. Powered by <a href="https://framer.com">Framer Studio<span className="linkarrow">></span></a> and <a href="https://airbnb.design/lottie/">Lottie<span className="linkarrow">></span></a>.</SectionTitle>
    </Section>

    <SectionForImagesFlex>
      <DeviceMockUp iphonex video={require("../images/alipay-other3.mp4")} text="Lab: a hidden space for new features. The new design allow users to access the lab quickly without taking a bigger space in the interface."/>
      <DeviceMockUp iphonex video={require("../images/alipay-other1.mp4")} text="Receive gift in chats: a motion design for opening the surprise gift."/>
      <DeviceMockUp iphonex video={require("../images/alipay-other4.mp4")} text="Message center: a new way to preview unread messages. User can click on icons in the dock to locate it immediately. Patented by Ant Finiancial and me."/>
    </SectionForImagesFlex>

    <Section>
      <SectionTitle>What I learned, <br />experienced, and experimented</SectionTitle>
      <StepContainerGroup>
        <StepNo>01</StepNo>
        <StepTitle>Think broader and broader <br /> for the user spectrum</StepTitle>
        <StepText>Design for both key user cases and lost of edge cases from more than 300,000+ users. Think how user access the new product/service and how it can take advantage of the existing resources - created the user spectrum for wider possibilities, even for potential users who can only see a poster with a QR code. Because to transfer current users or poster ad receivers to the new product/service easier is also an important design goal.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>02</StepNo>
        <StepTitle>Give me a fulcrum <br /> and I will convince the stakeholders</StepTitle>
        <StepText>The fulcrum is design decisions driven by research, company culture or big data. We are not convincing ourselves and be a fancy guy on Dribbble. Instead, we are facing huge external resistance - from clients and different developer teams (project team, API team, security team in one project maybe!). I learned to make the right design decisions and use it to convince other people - how our design goals can inheritance from business goals, how we will track the design quality, how many potential users one feature is facing, etc. Sometimes, to finish a convincing draft efficiently with stakeholders is way more important than keeping your sketch file not dirty.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>03</StepNo>
        <StepTitle>Breakthrough the mindset <br /> and chase for excellence</StepTitle>
        <StepText>"If you work in a textbook style, you may never reach excellence in a limited time". - my mentor <br/><br/>
        It's necessary to always be creative and not be limited by tools. I worked on flexible card prototyping for complex IA designs, paper prototyping for motion designs, and made developer-must-love-it pseudo-algorithm flowcharts for an institution solution project. You know what... they loved it!</StepText>
      </StepContainerGroup>
    </Section>

    <Image src={require("../images/alipay-memory.jpg")} /> 
    
    <Section>
      <MainText>Lastly, a memory of us celebrating Chilren's Day lol.</MainText>
      <MainText>If you want more details about my internship experience, please contact me and I am happy to share! </MainText>
    </Section>

  </WorkPage>
)

export default Alipay
