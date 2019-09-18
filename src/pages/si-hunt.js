import React from 'react'
import WorkPage from '../components/workpage'

import { ChapterTitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, InlineImage, SmallTitle, Section, NoteText, SectionTitle, MainText } from '../components/template';
import IFrameVideo from '../components/iframe'



const workId = 'si-hunt' 

const SIHunt = ({ location }) => (
  // eslint-disable-next-line
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
      <ChapterTitle>overview</ChapterTitle>
      <SectionTitle>SI Hunt is a combination of event finder and indoor navigator for freshmen and visitors. Using image recognition, users can get immediate help when and where they need.</SectionTitle>
      <IFrameVideo src="https://www.youtube.com/embed/390XqFp6IV4"/>
      <SmallTitle>Problem Statement</SmallTitle>
      <MainText>Students, especially freshmen, have trouble accessing useful resources they need - finding events, prints, or just a space to meet new friends. The current ways to get resources, like orientations provided by school, can't fit in how they actually solve the issues.</MainText>
    </Section>


    <hr/>
    <Section>
      <ChapterTitle>sprint 1 of 3</ChapterTitle>
      <SectionTitle>User Research + Minimal Prototype + Tech spikes</SectionTitle>
      <MainText>Things we done in this sprint:
        <br/>- Learning and practicing agile methods
        <br/>- User research - interviews, surveys, personas, affinity diagrams...
        <br/>- Brainstorming new ideas
        <br/>- Tech spikes to expand our knowledge in usable technology - VR, ARkit/ARCore, image recognition, 3D maps, mapbox indoor APIs, beacons...
        <br/>- Information architecture for building database ahead
        <br/>- (Finally) Prototyping a minimal version of SI Hunt → fine, but not a testable version :(</MainText>
      <InlineImage src={require("../images/si-hunt-affinity.png")} />
      <SmallTitle>Research: Interview Insights</SmallTitle>
      <MainText>For users, considering the scenes user have troubles, the information provided can not be efficient or customized, due to the lower level information carriers. Users want immediate help on certain tasks in certain locations.</MainText>
      <MainText>We also conducted some interviews from the school register office and the others who provided the information. They are improving the information carriers by designing a digital campus map and holding scavenger hunts, etc. However, they have some concerns that freshmen are the only ones that need helps so it could be not worthy to continue. (Is that true?) </MainText>

      <InlineImage src={require("../images/si-hunt-personas.png")} />
      <SmallTitle>Research: Personas</SmallTitle>
      <MainText>From the interviews, we also outline the profile of the targeted users of different characteristics. For users with longer or shorter experience in the school, they may have different bias on information they need. </MainText>
      <NoteText>Note: Here we reuse some personas from a similar project. </NoteText>

      <InlineImage src={require("../images/si-hunt-flow.png")} />
      <SmallTitle>Design: User Stories</SmallTitle>
      <MainText>We came up with different solutions based on our user personas and their main pain points. As long as they could fit in one big idea, we put all of them into Product Backlog, without judging ideas. We use user stories to describe every idea - what tasks the user can finish and what is the bottom line to test.</MainText>

      <InlineImage src={require("../images/si-hunt-minimalproto.png")} />
      <SmallTitle>Design: Minimal Prototype</SmallTitle>
      <MainText>Finally, for this sprint, we made our prototype and finish all must-haves and should-haves. However, for this sprint, we failed to come up with something to test, because the data inside is static. But we do sketch our imagaination, and made iterations through different user stories.</MainText>

      {/* <InlineImage src={require("../images/si-hunt-tech.png")} /> */}
      <SmallTitle>Develop: Tech Spike For Wayfinding</SmallTitle>
      <MainText>In order to locate our user and provide information based on geolocation, SI Hunt required some technology for indoor navigation. In the end, we chose to use an image recognition lib in ARKit 2 since it can be integreted easier and be customized or trained by CoreML if needed. The second choice would be wifi locating combining beacons which can provide a list of users nearby by bluetooth for social needs.</MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>sprint 2 of 3</ChapterTitle>
      <SectionTitle>Key Features + Lo-fi Prototype + Algorithm</SectionTitle>
      <MainText>Things we done in this sprint:
        <br/>- Desicion on MVP features
        <br/>- A testable lo-fi prototype anytime :)
        <br/>- Data populating, API design and algorithm for shortest path
        <br/>- More user research and more ideas as new stories</MainText>

      {/* <SmallTitle>Design: MVP Features</SmallTitle>
      <MainText>...</MainText>

      <SmallTitle>Develop: Data, Documents, Improvements</SmallTitle>
      <MainText>...</MainText>

      <SmallTitle>Testing: User Testings</SmallTitle>
      <MainText>...</MainText> */}
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>sprint 3 of 3</ChapterTitle>
      <SectionTitle>UMSI Expo + Public Testings + Iterations</SectionTitle>
      <MainText>Things we done in this sprint:
        <br/>- Attend UMSI Expo
        <br/>- Release a public beta version in TestFlight
        <br/>- Finish all MVP features
        <br/>- More design iterations...</MainText>
    </Section>
  </WorkPage>
)

export default SIHunt
