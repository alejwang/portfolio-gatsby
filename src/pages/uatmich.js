import React from 'react'
import Next from '../components/next'
import { ChapterTitle, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Section, SectionTitle, MainText } from '../components/template';

const UatMich = () => (
  <div>
    <BannerGroup image={require("../images/uatmich-cover.png")} gradient_start="#032859" gradient_end="#16319D">
      <TitleGroup>
        <Title>UM Hunt</Title>
        <Subtitle>Next to LBS educational social -<br/>Discovery app agile development <br /> for U of Mich freshmen</Subtitle>
      </TitleGroup>
    </BannerGroup>
    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Course</InfoTitle>
        <InfoText>2019 <br/> SI-699</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Advisor + Team</InfoTitle>
        <InfoText>Mark Newman <br/> Rahul, Dora, Yu</InfoText>
      </InfoGroup>
      <MainText>
      For my mastery course 'User-centered Agile Development in Human-computer Interaction', we designed an app to help freshmen, part-time and visitors to discover school events based on locations, navigate indoor to resources and also join social communities by new distance-based technologies. <br />After user and tech research, our app design combined navigation, image recognition, AR view, short-distance beacon communication. To achieve the goals, we're applying high-efficient agile development methods, for both design and development process.
      </MainText>
      <MainText>
        My Role: <br/>
        Act as scrum master to push the agile progress. Conduct user and technology research. Develop iOS application using Swift and back-end script in Python/Flask + MySQL.
      </MainText>
    </InfoPanelGroup>
    <hr></hr>
    <Section>
      <ChapterTitle>sprint 1 - for 4 weeks</ChapterTitle>
      <SectionTitle>Research, tech spikes, database and minimal Prototype</SectionTitle>
      <MainText>Still working on it... Waiting to be updated.</MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>sprint 2 - for 2 weeks</ChapterTitle>
      <SectionTitle>Key features, Algorithm, and lo-fi prototype</SectionTitle>
      <MainText>Still working on it... Waiting to be updated.</MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>sprint 3 - for 3 weeks</ChapterTitle>
      <SectionTitle>UMSI Expo, general solution, visual implement</SectionTitle>
      <MainText>Still working on it... Waiting to be updated.</MainText>
    </Section>
    <Next left_id="alipay" left_name="Alipay" right_id="tide-mobile" right_name="Tide Mobile"/>
  </div>
)

export default UatMich
