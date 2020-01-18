import React from 'react'
import WorkPage from '../components/workpage'

import { NoteText, ChapterTitle, SectionForImages, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template'
import pdf from "../files/Zhen_Wang_Inforest.pdf"



const workId = 'dof' 

const DoF = ({ location }) => (
  // eslint-disable-next-line
  <WorkPage id={workId} fromList={(location.state && location.state.fromList) != undefined ? location.state.fromList : "selected"}> 

    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Course</InfoTitle>
        <InfoText>2018</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Advisor</InfoTitle>
        <InfoText><a href="https://www.si.umich.edu/people/eytan-adar" target="_blank" rel="noopener noreferrer">Eytan Adar<span className="linkarrow">→</span></a></InfoText>
      </InfoGroup>
      <MainText>
      Depth of field, known as DoF, is the most important concept in photography. However, the concept itself is hard to understand for newbie. That is why I made an interactive  visualization simulation of the section of lights to explain how focus works and the depth of field calculation. By learning the concept of DoF, students can know how to adjust the factors to get a photo (maybe a portrait) with the perfect focus.
      </MainText>
      <MainText>
        This is an individual work.
      </MainText>
      <NoteText>Some knowledge required before learning - students should know about convex lens.</NoteText>
    </InfoPanelGroup>

    <hr/>
    <Section>
      <ChapterTitle>play + learn</ChapterTitle>
      <SectionTitle><a href="https://alejwang.github.io/si649-ind1-dof/" target="_blank" rel="noopener noreferrer">Try the demo here<span className="linkarrow">→</span></a> <br/>Or, <a href="https://github.com/alejwang/si649-ind1-dof" target="_blank" rel="noopener noreferrer">see the code in D3.js here<span className="linkarrow">→</span></a>.</SectionTitle>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>Step 1 - Goal + Exam</ChapterTitle>
      <SectionTitle>Define useful main objectives for learning and create an exam.</SectionTitle>
      <StepContainerGroup>
        <StepNo>Main objectives</StepNo>
        <StepTitle>Describe, Recall, Predict</StepTitle>
        <StepText>The student/viewer will be able to ​describe​​ the reason DoF exists for a camera. </StepText><StepText>
The student/viewer will be able to ​recall​​ what are the factors of DoF and their
correlations. (For example, the bigger the aperture, the shorter the DoF)</StepText><StepText>
The student/viewer will be able to ​predict​​ when factors changes, what will happen to focus of a photo taken by the camera - will the background be more clear or blur?</StepText><StepText>The student/viewer don't need to calculate values precisely using formula or recall typical value combinations.
</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Exam</StepNo>
        <StepTitle>Select, Open answer</StepTitle>
        <StepText>Open answer: If one day the main sensor can be bigger because of new technology (the upgrade of 35mm film to 350mm or 3500mm), will DoF dismiss? Why? </StepText><StepText>
Multiple choice: What can you do to change the current Dof while taking a photo? (a)
replace with another len (b) move the item further (c) adjust the aperture radius (d) dim
down the light. </StepText>
<StepText>
Open answer: If you want to capture your friend standing in front of a waterfall, however
now what you preview are a clear friend image and a blur waterfall. You want the
background to be clear enough, what can you do? If you have several solutions, which
one will you take?</StepText>
      </StepContainerGroup>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>Step 2 - Sketch + Structure</ChapterTitle>
      <SectionTitle>Using four chapter and three interactive diagram in different levels, users could understand the concept and play around.</SectionTitle>
      <StepContainerGroup>
        <StepNo>01</StepNo>
        <StepTitle>What Is A Perfect Portrait?</StepTitle>
        <StepText>Specify the answer that base on the needs to include the background (like a beautiful lake or mountain), or to impress the person itself. Provide some examples. </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>02</StepNo>
        <StepTitle>Intro To Focus</StepTitle>
        <StepText>Explain why focus happens, what is acceptably sharp. Provide a quick interactive diagram and let the user to adjust the distance of a point to help keep focus. </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>03</StepNo>
        <StepTitle>The Usage Of DoF</StepTitle>
        <StepText>Explain DoF and the factors of DoF calculation. Provide a playable diagram with focal, aperture and focus plain distance. </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>04</StepNo>
        <StepTitle>Testing</StepTitle>
        <StepText>Provide a flexible diagram with all parameters and a rating result (good or bad). Show the calculation formula and the cheatsheet. </StepText>
      </StepContainerGroup>
    </Section>
    

    {/* <Image src={require("../images/inforest-principle.png")} /> */}
    {/* <Section>
      <SectionTitle>Then by <a href="https://vimeo.com/202718376">gestures classification experiment<span className="linkarrow">></span></a>, <br/>we selected suitable plants and got valuable coefficient in results.</SectionTitle>
    </Section>

    <SectionForImages white>
      <Image src={require("../images/inforest-exp.png")} />
    </SectionForImages> */}

    <hr/>
    <Section>
      <ChapterTitle>Step 3 - visualization accessment</ChapterTitle>
      <SectionTitle>From the design aspect, I analyzed the visualization with the types, limitations and two Es. </SectionTitle>
      <StepContainerGroup>
        <StepTitle>Data, Chart, Filter</StepTitle>
        <StepText>Data (typical values for all options and combination) is from real manufacturers. No classical chart (bar, line, etc) or user-defined filtering.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepTitle>Design Limitation</StepTitle>
        <StepText>Preview is not real due to lacking of scaling, shaking, dimming, etc. This is only for telling a story and a theory about focus only, not an inspiring science thing.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepTitle>Expressiveness + Effectiveness</StepTitle>
        <StepText>Expressiveness is great - Even though the model has been abstracted, the information are all there. Effectiveness is good - the blur preview benefit the effectiveness. However, it can only show one combination of the factors. Users can’t track its trends with value changes or see a table for all combinations immediately. But from a design aspect, it may be a heavy load for the user to learn all the combinations.</StepText>
      </StepContainerGroup>
    </Section>

    {/* <Image src={require("../images/inforest-levels.png")} /> */}

    {/* <Section>
      <MainText>...</MainText>
      <MainText>Our team also patented our work (Patent Number: CN205508389U and CN201610178497.5) to provide the possibility to convert Inforest into commercial products in the future.</MainText>
    </Section> */}

  </WorkPage>
)

export default DoF
