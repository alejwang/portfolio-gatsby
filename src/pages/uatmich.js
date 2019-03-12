import React from 'react'
import { TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';

const UatMich = () => (
  <div>
    <BannerGroup image={require("../images/uatmich-cover.png")} gradient_start="#032859" gradient_end="#16319D">
      <TitleGroup>
        <Title>U@Mich</Title>
        <Subtitle>LBS discover app development <br /> for U of Mich freshmen <br /> using agile methods</Subtitle>
      </TitleGroup>
    </BannerGroup>
    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Course</InfoTitle>
        <InfoText>2019</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Advisor + Team</InfoTitle>
        <InfoText>Mark Newman <br/> Rahul, Dora, Yu</InfoText>
      </InfoGroup>
      <MainText>
      For my mastery course 'User-centered Agile Development in Human-computer Interaction', we designed an app to help freshmen, part-time and remote students to discover school events, navigate indoor to resources and also join social communities by creating new interaction technologies. <br />After user and tech research, our app design combined navigation, image recognition, AR view, short-distance beacon communication. To achieve the goals, we're applying high-efficient agile development methods, for both design and development process.
      </MainText>
      <MainText>
        My Role: <br/>
        Act as scrum master to push the agile progress. Conduct user and technology research. Develop iOS application using Swift and back-end script in Python + MySQL.
      </MainText>
    </InfoPanelGroup>
    {/* <Image src={require("../images/alipay-timeline.png")} />  */}
    <hr></hr>
    <Section>
      <SectionTitle>Sprint 1 <br />Research, Tech Spikes, and Lo-fi Prototype</SectionTitle>
      {/* <StepContainerGroup>
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
      </StepContainerGroup> */}
    </Section>
    {/* <Image src={require("../images/alipay-memory.jpg")} />  */}
    <Section>
      <MainText>Still working on it... Waiting to be updated.</MainText>
    </Section>
  </div>
)

export default UatMich
