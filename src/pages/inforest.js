import React from 'react'
import { NoteText, ChapterTitle, SectionForImageWhite, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template'
import pdf from "../files/Zhen_Wang_Inforest.pdf"
import Next from '../components/next'

const Inforest = () => (
  <div>
    <BannerGroup image={require("../images/inforest-cover.png")}
          gradient_start="#365B41"
          gradient_end="#596235">
      <TitleGroup>
        <Title>Inforest Space</Title>
        <Subtitle>Next to non-touch interaction - <br /> Invoke deep dreams of forest <br/>in heavy city mist by a beatiful heart travel</Subtitle>
      </TitleGroup>
    </BannerGroup>
    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Amateur</InfoTitle>
        <InfoText>2016</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Team</InfoTitle>
        <InfoText>Charles, Siyu</InfoText>
      </InfoGroup>
      <MainText>
      Inforest, is a recreation of forest for the future citizens who don't know what forest was, an urban public breathing space where people could interact with plants just like in a forest. Through technology research, engineering, interaction design and architecture design.
      </MainText>
      <MainText>
        My Role: <br/>
        As an interaction designer and architect, I mainly came up with ideas and conceptions base on technology research and then transferred the concepts into prototypes. As a work team, we designed, prototyped, tested and launched the InForest.
      </MainText>
      <NoteText><a href={pdf}>Download the PDF version <span className="linkarrow">></span></a></NoteText>
    </InfoPanelGroup>

    <hr/>
    
    <Section>
      <ChapterTitle>background</ChapterTitle>
      <SectionTitle>The forest is disappearing and the urban citizens are lost. <br/>People need the forest. For people who forgot already, we should let them remember the feeling of nature.</SectionTitle>
      <MainText>
      Imagine if you were leisurely sauntering in a forest, taking in all the sights, sounds and smells of nature. It will the most welcome when you get tired of city’s noise. The concept of InForest originated to produce an interactive, experiential system arousing urban people the sensation of the forest. Our work started with analyzing the vertical structure of the forest which contributes to people’ s multi-layer sensory experience in the forest. Then we abstracted specific sounds from each layer of the following design.
      </MainText>
      <StepContainerGroup>
        <StepNo>startpoint</StepNo>
        <StepTitle>urbanization + nature = ?</StepTitle>
        <StepText>China is experiencing the fastest and highest urbanization in the world, which leaves many thorny nature problems like air pollution, dense traffic, and more notably increasing pressure on people. Not surprisingly, urban people are eager to get away from cities and get close to the wild nature without haze once they have a chance.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>endgame</StepNo>
        <StepTitle>interaction = screen ?</StepTitle>
        <StepText>As informative transformation goes further and more profound, whereas ubiquitous screen-based user interfaces have profoundly changed people’s lives, it is estranging people from the real physical world. This context urges me to rethink interaction design on a more significant scale-to design interactive system or environment where people are naturally immersed in.</StepText>
      </StepContainerGroup>
    </Section>

    <hr/>

    <Section>
      <ChapterTitle>interactive technology research</ChapterTitle>
      <SectionTitle>We use technology from Disney + CMU to inspire us <br/>to capture small signals created by touching the plants</SectionTitle>
    </Section>

    <Image src={require("../images/inforest-principle.png")} />

    <Section>
      <MainText>We use the technology called Swept Frequency Capacitive Sensing Technique from Disney Research and Carnegie Mellon University (Touché: Enhancing Touch Interaction on Humans, Screens, Liquids, and Everyday Objects). To build the sensing system, a single conductive wire links the soil or water to our sensor controller. Through dynamic signal analysis, the sensing system could detect and recognize people’s different interactions (e.g., approach, touch, etc.) with plants.
      </MainText>
    </Section>

    <Section>
      <SectionTitle>Then by <a href="https://vimeo.com/202718376">gestures classification experiment<span className="linkarrow">></span></a>, <br/>we selected suitable plants and got valuable coefficient in results.</SectionTitle>
    </Section>

    <SectionForImageWhite>
      <Image src={require("../images/inforest-exp.png")} />
    </SectionForImageWhite>

    <Section>
      <MainText>
      Each transmission from the sensor contained a 160-point capacitive profile from which we extracted a series of features for classification. After more than 400 times classification accuracies tests for different kinds of plants, we select reliable controlling gestures with accuracies over 80% of each plant for the following application.</MainText>
    </Section>

    <hr/>

    <Section>
      <ChapterTitle>design conception</ChapterTitle>
      <SectionTitle>By designing different interaction on different height, <br/> Inforest tend to simulate the nature's feeling</SectionTitle>
      <StepContainerGroup>
        <StepNo>4F</StepNo>
        <StepTitle>Bird + Wind</StepTitle>
        <StepText>People could control the volume of the sound of birds by changing the distance from their hands to the plants. When they touch the plants, they will hear all the birds scatter away suddenly, and they need to move to another location to listen to those birds singing again.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>3F</StepNo>
        <StepTitle>Cicadas</StepTitle>
        <StepText>On this floor, people could rest under a tree of cicadas sounds. The sound could be gradually stopped by pinching the leaves.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>2F</StepNo>
        <StepTitle>Crickets + Frogs</StepTitle>
        <StepText>Interactive plants units are installed along the trails going upward. People would hear frogs and crickets sound when they walk on the trails and even hear frogs’ jumping into the water when they touch the plants.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>1F</StepNo>
        <StepTitle>Streams</StepTitle>
        <StepText>The base of Inforest is an urban interactive public breathing space where people can participate. Our work taps into some of the most basic human instincts, to play and explore. It also generates talk value through a shared experience.</StepText>
      </StepContainerGroup>
    </Section>

    <Image src={require("../images/inforest-levels.png")} />

    <Section>
      <ChapterTitle>prototype</ChapterTitle>
      <SectionTitle>Thanks for our engineer friend, we designed and made incredible interaction units that can mount lots of plants with the watering system. Also we had the small space Inforest well-designed and built... as a model.</SectionTitle>
    </Section>

    <Image src={require("../images/inforest-publish.jpg")} />
    <Image src={require("../images/inforest-craft.png")} />

    <Section>
      <MainText>Inforest was published as a conception design on DIP 2016 "The future we design".</MainText>
      <MainText>Our team also patented our work (Patent Number: CN205508389U and CN201610178497.5) to provide the possibility to convert Inforest into commercial products in the future.</MainText>
    </Section>

    <Next left_id="smartpill" left_name="SmartPill" right_id="#" right_name="#"/>
  </div>
)

export default Inforest
