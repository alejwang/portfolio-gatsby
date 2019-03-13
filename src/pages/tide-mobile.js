import React from 'react'
import { ChapterTitle, NoteText, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionForImage, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';
import DeviceMockUp from '../components/devicemockup'

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
          <InfoText>Student Portal, ZJU <br/> Bubu, Jingjing, Shiguan</InfoText>
        </InfoGroup>
        <MainText>
        Tide Mobile (求是潮手机站) is an everyday calendar app for university students to organize their academic calendar and find more club activities in leisure life. <br/> Check it out on <a href="https://itunes.apple.com/app/qiu-shi-chaomobile/id583334920">App Store<span className="linkarrow">></span></a>.
        </MainText>
        <MainText>
          My Role: <br/>
          As a team leader, I engaged the team forward in an open atmosphere. I made user research and design critique on the previous version of Tide Mobile to come up with ideas about the new version. As a team, we made the design desicions together during discovering and making the ia, wireframes, interactions and later developing.
        </MainText>

        <NoteText>
          Due to agile updates, the images below from different periods may look a little bit different.
        </NoteText>
    </InfoPanelGroup>

    <Image src={require("../images/tide-mobile-overall.png")} /> 

    <Section>
      <ChapterTitle>key problems</ChapterTitle>
      <SectionTitle>Before, life in my school wasn't easy and fun <br/>because of two major problems.</SectionTitle>
      <StepContainerGroup>
        <StepNo>01</StepNo>
        <StepTitle>Isolated useful resources</StepTitle>
        <StepText>Students waste lots of time on checking plenty of information including courses, exams, homework, labs, financial aids and school bus from several places. It spends time, but students don't want to miss things.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>02</StepNo>
        <StepTitle>Information overload</StepTitle>
        <StepText>Students also get information passively outside their academic life from tons of posters, paper ads, outdoor banners or SMS/email sent by departments and student clubs. But those ways are not attractive for students, also inprecise and expensive for the sender.</StepText>
      </StepContainerGroup>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>solution overview</ChapterTitle>
      <SectionTitle>Tide Mobile 3 is born to improve the productivity in school. <br/>By saving students' time and energy to organize all information they need, <br/>we finally brought them a new school lifestyle.</SectionTitle>
    </Section>

    <SectionForImage>
      <DeviceMockUp video={require("../images/tide-mobile-showcase1.mp4")} text="Today - Designed for 'this' moment. With one glance, users can know the ongoing event, and next events coming up today."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase2.mp4")} text="Calendar - All the events are synced from the educational system or our database so the user's schedule is always up-to-date."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase3.mp4")} text="Discover - A place with lots of fun activities posted by hundreds of clubs. View activities. Check availability. Book tickets online. And add to the calendar with one click."/>
      <DeviceMockUp video={require("../images/tide-mobile-showcase4.mp4")} text="Tools - Check some popular tools and links - your physical training, GPA, the school bus, mail..."/>
    </SectionForImage>

    <Section>
      <ChapterTitle>design critique + research</ChapterTitle>
      <SectionTitle>We started from design critique on the previous version base on our user research. <br/> We also conducted interviews on peers, senoirs and freshmen.</SectionTitle>
    </Section>
    <Image src={require("../images/tide-mobile-research.png")} /> 
    <Section>
      <MainText>
        Conclusion: a new information structure needed
      </MainText>
      <MainText>
        Although the previous design created an unique (fancy!) experience by cards view, some interactions are still hard to understand. The card didn't work as we thought because the needed information is not shown enough while useless details showed a lot. 
      </MainText>
      <MainText>
        We also noticed the big differences of how user use it depending on when and where. In different scenarios, users want to focus on only few things without noises.
      </MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>design thinking</ChapterTitle>
      <SectionTitle>Our goal is to redefine the "easy + joyful" experience on Mobile. <br/> 
      "Easy" is designing for situations and tasks to let users gather information quickly and "joyful" is a sense of surprise.</SectionTitle>
    </Section>

    
  </div>
)




export default TideMobile
