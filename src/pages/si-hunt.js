import React from 'react'
import WorkPage from '../components/workpage'

import { ChapterTitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Section, SectionTitle, MainText } from '../components/template';



const workId = 'si-hunt' 

const SIHunt = ({ location }) => (
  <WorkPage id={workId} fromList={(location.state && location.state.fromList) != undefined ? location.state.fromList : "selected"}> 

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
      A discovery app agile development for School of Information freshmen.
      </MainText>
      <MainText>
      For my mastery course 'User-centered Agile Development in Human-computer Interaction', we designed an app to help freshmen, part-time and visitors to discover school events based on locations, navigate indoor to resources and also join social communities by new distance-based technologies. <br />After user and tech research, our app design combined navigation, image recognition, AR view, short-distance beacon communication. To achieve the goals, we're applying high-efficient agile development methods, for both design and development process.
      </MainText>
      <MainText>
        My Role: <br/>
        Act as scrum master to push the agile progress. Conduct user and technology research. Develop iOS application using Swift and back-end script in Python/Flask + MySQL.
      </MainText>
    </InfoPanelGroup>

    <hr/>
    <Section>
      <ChapterTitle>sprint 1 - for 4 weeks</ChapterTitle>
      <SectionTitle>Research, tech spikes, database and minimal Prototype</SectionTitle>
      <MainText>Things we done in this sprint:
        <br/>- Brainstorming
        <br/>- Learning and practicing agile methods
        <br/>- User research - interviews, surveys, personas, affinity diagrams...
        <br/>- Tech spikes to expand our knowledge in usable technology - vr, ARkit, ARCore, image recognition, 3D maps, mapbox indoor apis, beacons...
        <br/>- Information architecture and finish the database using Python
        <br/>- Prototyping a minimal version of SI Hunt → Fine, but not a testable version :(</MainText>
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
  </WorkPage>
)

export default SIHunt
