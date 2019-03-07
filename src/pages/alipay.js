import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/index';

const Alipay = () => (
  <div>
    <BannerGroup image={require("../images/alipay-cover.png")} gradient_start="#153c88" gradient_end="#3068e8">
        <Title>Alipay</Title>
        <Subtitle>Next to connected city service era - <br/> What high-level view I learned <br/> from working for Alipay in Ant Finiancial</Subtitle>
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
        I was lucky to work in Alipay Design team with talented colleagues together to bring more ideas to come true. 
        During my internship, I worked on developing two new projects and improving one launched project. (NDA)
      </MainText>
      <MainText>
        My Role: <br/>
        Create design concepts, IA, user flows, wireframe, and also prototypes.<br/>
        Work with government, researchers and developers to launch the project and establish evaluation methods.<br/>
        Spend my free time working on motion design and usability testing on a cross-devices prototype.
      </MainText>
    </InfoPanelGroup>
    <Image src={require("../images/alipay-timeline.png")} /> 
    <Section>
      <SectionTitle>What I learned, <br />experienced, and experimented</SectionTitle>
      <StepContainerGroup>
        <StepNo>01</StepNo>
        <StepTitle>Think broader and broader <br /> for the user spectrum</StepTitle>
        <StepText>Design for both key user cases and lost of edge cases. I had never designed for 300,000+ users and created the user spectrum for any possibilities - even for potential users who can only see a poster with a QR code. Because to transfer local users to our online app easier is also an important design goal.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>02</StepNo>
        <StepTitle>Give me a fulcrum <br /> and I will convince the stakeholders</StepTitle>
        <StepText>The fulcrum is design decisions driven by research result, company culture or precise data. We are not convincing ourselves and post something fancy to Dribbble. Instead, we are facing huge external resistance - from governments, clients, different developer teams (project team, API team, security team in one project!!!). I learned to make the right design decisions and use it to convince other people. Sometimes, to finish a convincing draft efficiently with stakeholders is way more important than keeping your sketch file not dirty.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>03</StepNo>
        <StepTitle>Break through the mindset <br /> and chase for excellence</StepTitle>
        <StepText>"If you work in a textbook style, you may never reach excellence in limited time". - my mentor <br/><br/>
        It's necessary to always be creative and not be limited by tools. I worked on flexible card prototyping for complex IA designs, paper prototyping for motion designs, and made developer-must-love-it pseudo-algorithm flowcharts for an institution solution project. You know what... they loved it!</StepText>
      </StepContainerGroup>
      {/* <StepContainerGroup>
        <StepNo>04</StepNo>
        <StepTitle>Use tools wisely</StepTitle>
        <StepText>blabla</StepText>
      </StepContainerGroup> */}
    </Section>
    <Image src={require("../images/alipay-memory.jpg")} /> 
    <Section>
      <MainText>Lastly, a memory of us celebrating Chilren's Day lol.</MainText>
      <MainText>If you want more details about my internship experience, please contact me and I'll be more than happy to share! </MainText>
    </Section>
  </div>
)

export default Alipay
