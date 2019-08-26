import React from 'react'
import styled from 'styled-components'
import { ChapterTitle, NoteText, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionForImages, SectionForImagesFlex, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';
import DeviceMockUp from '../components/devicemockup'
import pdf from "../files/Zhen_Wang_Tide_Mobile.pdf"
import Next from '../components/next'

export const ImageEnd = styled.img`
  width: 90%;
  max-width: 1440px;
  height: 80%;
  margin: 150px auto -150px auto;
  box-sizing: border-box;
  display:block;
  overflow:auto;
  @media (max-width: 768px) {
    margin: 80px auto -80px auto;
  }
`

const TideMobile = () => (
  <div>
    <BannerGroup image={require("../images/tide-mobile-cover.png")} 
          gradient_start="#E77826"
          gradient_end="#F6C38F">
      <TitleGroup>
        <Title>Tide Mobile</Title>
        <Subtitle>Next to campus lifestyle - <br/> Redefine how college students gath information and have fun, <br/> accessible for everyone in one touch</Subtitle>
      </TitleGroup>
    </BannerGroup>

    <InfoPanelGroup>
        <InfoGroup>
          <InfoTitle>Project</InfoTitle>
          <InfoText>2016-17</InfoText>
        </InfoGroup>
        <InfoGroup>
          <InfoTitle>Client + Team</InfoTitle>
          <InfoText><a href="http://www.qsc.zju.edu.cn">Student Portal, ZJU<span className="linkarrow">></span></a> <br/> Bubu, Jingjing, Shiguan</InfoText>
        </InfoGroup>
        <MainText>
        Tide Mobile 3.0 (求是潮手机站) is an everyday calendar app for university students to organize their academic calendar and find more club activities in leisure life. <br/> Check it out on <a href="https://itunes.apple.com/app/qiu-shi-chaomobile/id583334920">App Store<span className="linkarrow">></span></a>.
        </MainText>
        <MainText>
          My Role: <br/>
          As a team leader, I engaged the team forward in an open atmosphere. I made user research and design critique on the previous version of Tide Mobile to come up with ideas about the new version. As a team, we made the design desicions together during discovering and making the ia, wireframes, interactions and later developing.
        </MainText>

        <NoteText>
        <a href={pdf}>Download the PDF version <span className="linkarrow">></span></a><br/>Due to agile updates, the images below from different periods may look a little bit different.
        </NoteText>
    </InfoPanelGroup>

    <Image src={require("../images/tide-mobile-overall.png")} /> 

    <Section>
      <ChapterTitle>overview</ChapterTitle>
      <SectionTitle>Tide Mobile 3 is born to improve productivity in school. <br/>By saving students' time and energy to organize all the information they need, <br/>we finally brought them a new school lifestyle.</SectionTitle>
    </Section>

    <SectionForImagesFlex>
      <DeviceMockUp video={require("../images/tide-mobile-showcase1.mp4")} text="Today - Designed for 'this' moment. With one glance, users can know the ongoing event, and following events coming up today."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase2.mp4")} text="Calendar - All the events are synced from the educational system or our database so the user's schedule is always up-to-date."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase3.mp4")} text="Discover - A place with lots of fun activities posted by hundreds of clubs. View activities. Check availability. Book tickets online. And add to the calendar with one click."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase4.mp4")} text="Tools - Check some popular tools and links - your physical training, GPA, the school bus, mail..."/>
    </SectionForImagesFlex>

    <Section>
      <ChapterTitle>key problems</ChapterTitle>
      <SectionTitle>Before, life in my school wasn't easy and fun <br/>because of some major problems.</SectionTitle>
      <StepContainerGroup>
        <StepNo>01</StepNo>
        <StepTitle>Isolated useful resources</StepTitle>
        <StepText>Students waste lots of time on checking plenty of information including courses, exams, homework, labs, financial aids and school bus from several places. It spends time, but students don't want to miss things.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>02</StepNo>
        <StepTitle>Information overload</StepTitle>
        <StepText>Students also get information passively outside their academic life from tons of posters, paper ads, outdoor banners or SMS/email sent by departments and student clubs. But those ways are not attractive for students, also imprecise and expensive for the sender.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>03</StepNo>
        <StepTitle>Tide Mobile 2.0 can't fulfill the changing user needs</StepTitle>
        <StepText>Tide Mobile's old version designed by <a href="http://ruolan.design">Ruolan Xia<span className="linkarrow">></span></a> was published in 2014. Cards with different information showed on the Home screen and users can click cards to see more and do actions. However, students are having increasing negative feedback on this app.</StepText>
      </StepContainerGroup>
    </Section>

    <hr/>

    <Section>
      <ChapterTitle>design critique + research</ChapterTitle>
      <SectionTitle>We started from design critique on the previous version 2.0 base on our user research. <br/> We also conducted interviews on peers, senoirs and freshmen.</SectionTitle>
    </Section>
    <Image src={require("../images/tide-mobile-research.png")} /> 
    <Section>
      <MainText>
        Conclusion: a new information structure needed
      </MainText>
      <MainText>
        Although the previous design created a unique (fancy!) experience by cards view, some interactions are still hard to understand. The card didn't work as we thought because the needed information is not shown enough while useless details showed a lot. 
      </MainText>
      <MainText>
        We also noticed the big differences in how user use it depending on when and where. In different scenarios, users want to focus on only a few things without noises.
      </MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>design thinking</ChapterTitle>
      <SectionTitle>Our goal is to redefine the "easy + joyful" experience on Mobile. <br/> 
      "Easy" is designing for situations and tasks to let users gather information quickly and "joyful" is a sense of surprise.</SectionTitle>
    </Section>

    <Image src={require("../images/tide-mobile-scenario.png")} /> 
    <Section>
      <MainText>
      In our consideration, the most important information for one situation should be specially designed to support users to finish related tasks quickly. Users don't want everything. They just want one thing at a time.
      </MainText>
      <MainText>
      For instance, when users want to check the timetable on the bed or before sleep, they wish to a full calendar for a day. While an anxious boy standing near a building touching his phone, he wants to know only the classroom number where he should be in there in 30 sec.
      </MainText>
      <MainText>
      To increase productivity, we double-checked our existing IA to see the current workflows and resources.
      </MainText>
    </Section>

    <Image src={require("../images/tide-mobile-ia.png")} /> 
    <Section>
      <MainText>
      Scenario-based design provide an extreme clear IA where useful information can be accessible in a fewer level.
      </MainText>
      <MainText>
      We reorganize the information architecture to make sure elements have the right priority, so users can get them in easier.
      </MainText>
    </Section>

    <SectionForImages>
      <Image src={require("../images/tide-mobile-wireframe.png")} /> 
      <ImageEnd src={require("../images/tide-mobile-visual.png")} /> 
    </SectionForImages>
    
    <Section>
      <ChapterTitle>after release</ChapterTitle>
      <SectionTitle>Till Oct. 2016, Tide Mobile has more than 18,000 daily active users. <br/>
        We feel very proud to help almost 61% undergraduate student <br/>
        at Zhejiang University to have an easy and joyful life. <br/>
        Don't forget to check out cool <a href="https://youtu.be/24HFhpKGtkQ">ad<span className="linkarrow">></span></a>.</SectionTitle>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>rethink in 2019</ChapterTitle>
      <StepContainerGroup>
        <StepNo>Good</StepNo>
        <StepTitle>Positive feedback. <br/>Users mostly like the changes.</StepTitle>
        <StepText>After 2017, I left the project team due to graduation. We did some design iterations during the years. And students were already live in a lifestyle with Tide Mobile. I also grew up and gain more abilities in design and coding, thanks to my team.</StepText>
        <StepText>Our project also had a big impact out of school. My teammates and I got the Second Prize in China Collegiate Computing Contest Mobile Application Innovation Contest by Apple and MOE China in 2016. I felt so proud that my name is on the about page in every Tide Mobile.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Bad</StepNo>
        <StepTitle>Should have more testing. <br/>Can think bigger.</StepTitle>
        <StepText>We always wanted to chase perfection, in the right path. At that time, we didn't keep conducting user tests and validating our big decision. We did some design decisions (for example, the main clue for Tide Mobile - time? location? social?), but only supported by typical user data. We did some quick workflow analysis after but judged by our own minds. Those can't reflect users' mind and our minds were limited to think bigger.  </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Ugly</StepNo>
        <StepTitle>Unique design language lost. <br/>It somehow became common.</StepTitle>
        <StepText>For a pure experience, we started from zero. As a team leader, when you decide to start over, everyone is actually facing a big pressure. We didn't have enough time to inheritance from our own style. Also, a big change from card view to tab view improve the efficiency, but somehow users feel the emotional bond was missing.</StepText>
      </StepContainerGroup>
    </Section>

    <Image src={require("../images/tide-mobile-love.png")} /> 
    <Next left_id="sihunt" left_name="SI Hunt" right_id="smartpill" right_name="SmartPill"/>
  </div>
)




export default TideMobile
