import React from 'react'
import WorkPage from '../components/workpage'
import { ChapterTitle, NoteText, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionForImages, SectionForImagesFlex, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';



const workId = 'edge-shelter' 

const EdgeShelter = ({ location }) => (
  // eslint-disable-next-line
  <WorkPage id={workId} fromList={(location.state && location.state.fromList) != undefined ? location.state.fromList : "selected"}> 
    
    <InfoPanelGroup>
        <InfoGroup>
          <InfoTitle>Course</InfoTitle>
          <InfoText>2015</InfoText>
        </InfoGroup>
        <InfoGroup> 
          <InfoTitle>Advisor + Team</InfoTitle>
          <InfoText>Tao Lin <br/> Maggie, Yan, Siwei</InfoText>
        </InfoGroup>
        <MainText>
        The Edge (Shelter) between humen & animals: Start with a view of animals to make an shelter for us animals all the way from fund to adoption.
        </MainText>
        <MainText>
          My Role: <br/>
          As the team leader, I and my teammates conducted 'product' research in the animal saving methods, and make a unique plan and design from the track of animals. I was in charge of the plan developing and also the technical engineering design.
        </MainText>

    </InfoPanelGroup>

    <Image src={require("../images/edge-shelter-header.png")} /> 

    <Section>
      <ChapterTitle>overview</ChapterTitle>
      <SectionTitle>The purpose is not only to design a shelter for animals to live, but also to facilitate adoption by dialogue with the urban areas.</SectionTitle>
    </Section>

    {/* <Section>
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

    
    <Section>
      <ChapterTitle>after release</ChapterTitle>
      <SectionTitle>Till Oct. 2016, Tide Mobile has more than 18,000 daily active users. <br/>
        We feel very proud to help almost 61% undergraduate student <br/>
        at Zhejiang University to have an easy and joyful life. <br/>
        Don't forget to check out cool <a href="https://youtu.be/24HFhpKGtkQ">ad<span className="linkarrow">></span></a>.</SectionTitle>
    </Section>


    <Image src={require("../images/tide-mobile-love.png")} />  */}
  </WorkPage>
)

export default EdgeShelter
