import React from 'react'
import styled from 'styled-components'
import { NoteText, ChapterTitle, SectionForImageWhite, SectionForImage, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText } from '../components/template';
import pdf from "../files/Zhen_Wang_SmartPill.pdf"
import Next from '../components/next'

const SectionForImageWhite2 = styled.div`
  width: 100%;
  padding: 200px 0;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;

  background: #fff;
  background-clip: padding-box;
`
const Image2 = styled.img`
  width: 40%;
  display: inline-block;
`

const SmartPill = () => (
  <div>
    <BannerGroup image={require("../images/smartpill-cover.png")} gradient_start="#0C9D6A" gradient_end="#3BD3AF">
      <TitleGroup>
        <Title>SmartPill</Title>
        <Subtitle>Next to pharmacy business mode - <br /> Fulfill the urgent need of patients and lacking resources<br/> in China in alternative ways</Subtitle>
      </TitleGroup>
    </BannerGroup>
    <InfoPanelGroup>
      <InfoGroup>
        <InfoTitle>Course</InfoTitle>
        <InfoText>2015</InfoText>
      </InfoGroup>
      <InfoGroup>
        <InfoTitle>Team</InfoTitle>
        <InfoText>Maggie, Zheng, Yan</InfoText>
      </InfoGroup>
      <MainText>
      An idea for patents to get possible medical resourse on their phone with Smartpill.
      </MainText>
      <MainText>
        My Role: <br/>
        As the team leader, I conducted business research with my teammates together to come up with market positioning, business model innovation and marketing strategy. I was in charge of the project progress, information structure, prototyping and presentation.
      </MainText>
      <NoteText>
        <a href={pdf}>Download the PDF version <span className="linkarrow">></span></a>
        </NoteText>
    </InfoPanelGroup>

    <hr/>
    
    <Section>
      <ChapterTitle>background</ChapterTitle>
      <SectionTitle>China's hospital medical resourse is scarce. <br/>The young generation don't like to go to hospital, <br/>that's why pharmacist became important.</SectionTitle>
      <MainText>China's hospital medical resourse is scarce to afford billions people's daily health care. According to the research in 2014, the number of doctors per 10000 citizen was only 21 and the average waiting time in 3A hospital was half an hour. The bad condition brings patients miserable experience and risk to give wrong diagnose.
      </MainText>
      <MainText>
      The youngs in China is becoming unwilling to go to hospital and wait in long queue if they feel not that bad. To deal with sight illness or their occupational disease, they buy themselves pills by parents' experience or searching on the Internet. But both way are not safe. Cold with similar symptom can be the wind-cold, wind-heat or rheumatism-cold type which mess people deeply. With increasing mobile medical market and new technology, there should be a better way to improve the experience and accuracy in self-diagnostics.
      </MainText>
    </Section>

    <hr/>

    <Section>
      <ChapterTitle>market analysis</ChapterTitle>
      <SectionTitle>We applied the PEST to analysis the potiential market, <br/> and then dig in who can we serve, <br/> and what can Smartpill do in capability</SectionTitle>
    </Section>

    <SectionForImageWhite>
      <Image src={require("../images/smartpill-pest.png")} />
    </SectionForImageWhite>

    <Section>
      <ChapterTitle>business model innovation</ChapterTitle>
      <SectionTitle>"SmartPill offers self-diagnostics and drug use inquiry services <br/> for the young and mid-aged patients with slight or chronic disease" <br/>
      After this decision, we made more research to make complete model with all resources.</SectionTitle>
    </Section>

    <SectionForImage>
      <Image src={require("../images/smartpill-model.png")} />
    </SectionForImage>

    <Section>
      <MainText>
      As shown, we expand the partners to medical companies and pharmacist union to provide stable service and collect more information in diagnostics database.
      </MainText>
    </Section>

    <hr/>

    <Section>
      <ChapterTitle>service design</ChapterTitle>
      <SectionTitle>We designed a service strategy in 4P frame to make sure our target users are accurate.</SectionTitle>
    </Section>

    <SectionForImageWhite>
      <Image src={require("../images/smartpill-4p.png")} />
    </SectionForImageWhite>

    <Section>
      <ChapterTitle>wireframe + prototyping</ChapterTitle>
      <SectionTitle>Finally, we made a simple prototype to make it easy to understand.</SectionTitle>
    </Section>

    <SectionForImageWhite2>
      <Image2 src={require("../images/smartpill-wireframe1.png")} />
      <Image2 src={require("../images/smartpill-wireframe2.png")} />
    </SectionForImageWhite2>

    <Section>
      <ChapterTitle>after class</ChapterTitle>
      <SectionTitle>One question left: <br/>
        What is the golden key for SmartPill - technology, institution support, or laws?</SectionTitle>
      <MainText>
        From a desiner aspect, our thoughts on Smartpill are limited because we can't only use design to improve the precision. For now, it can only be a concept.</MainText>
      <MainText> However, when the personal/mobile medical tool is becoming a trend, our designers need to think ahead - How to get users' trust? Can we use emotion design? Is our design accessible to the elders and disablities? These are places for design to make values.</MainText>
    </Section>

    <Next left_id="tide-mobile" left_name="Tide Mobile" right_id="inforest" right_name="Inforest Space"/>
  </div>
)

export default SmartPill
