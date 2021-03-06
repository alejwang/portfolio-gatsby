import React from 'react'
import WorkPage from '../components/workpage'

import styled from 'styled-components'
import { NoteText, ChapterTitle, SectionForImages, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText } from '../components/template'
import pdf from "../files/Zhen_Wang_SmartPill.pdf"



const workId = 'smartpill' 

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

const SmartPill = ({ location }) => (
  // eslint-disable-next-line
  <WorkPage id={workId} fromList={(location.state && location.state.fromList) != undefined ? location.state.fromList : "selected"}> 

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
      An idea for patents to get affordable resource at their fingertipson with Smartpill.
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
      <SectionTitle>China's hospital resource is scarce. <br/>The young generation go to hospital less frequently. <br/>Instead, they seek help from pharmacists.</SectionTitle>
      <MainText>China's hospital medical resource is scarce to afford billions of people's daily health care. According to the research in 2014, the number of doctors per 10000 citizens was only 21 and the average waiting time in 3A hospital was half an hour. The bad condition brings patients miserable experience and risk to give wrong diagnose.
      </MainText>
      <MainText>
      The youngs in China is becoming unwilling to go to the hospital and wait in a long queue if they feel not that bad. To deal with sight illness or their occupational disease, they buy themselves pills by parents' experience or searching on the Internet. But both way is not safe. Cold with similar symptom can be the wind-cold, wind-heat or rheumatism-cold type which mess people deeply. With increasing mobile medical market and new technology, there should be a better way to improve the experience and accuracy in self-diagnostics.
      </MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>market analysis</ChapterTitle>
      <SectionTitle>We applied the PEST to invest in the potential market, <br/> and then dig in who can we serve, <br/> and what can Smartpill do in capability</SectionTitle>
    </Section>

    <SectionForImages white>
      <Image src={require("../images/smartpill-pest.png")} />
    </SectionForImages>

    <Section>
      <ChapterTitle>business model innovation</ChapterTitle>
      <SectionTitle>"SmartPill offers self-diagnostics and drug use inquiry services <br/> for the young and mid-aged patients with slight or chronic disease" <br/>
      After this decision, we made more research to make a complete model with all resources.</SectionTitle>
    </Section>

    <SectionForImages>
      <Image src={require("../images/smartpill-model.png")} />
    </SectionForImages>

    <Section>
      <MainText>
      As shown, we expand the partners to medical companies and pharmacist union to provide stable service and collect more information in the diagnostics database.
      </MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>service design</ChapterTitle>
      <SectionTitle>We designed a service strategy in 4P frame to examine if SmartPill targets the accurate user group, and to classify our users into more groups.</SectionTitle>
    </Section>

    <SectionForImages white>
      <Image src={require("../images/smartpill-4p.png")} />
    </SectionForImages>

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
        What is the golden key for SmartPill - <br />
        technology, institution support, or laws?</SectionTitle>
      <MainText>
      From a designer aspect, our thoughts on Smartpill are limited because we can't only use design to improve precision. For now, it can only be a concept.</MainText>
      <MainText> However, when the personal/mobile medical tool is becoming a trend, our designers need to think ahead - How to get users' trust? Can we use emotion design? Is our design accessible to the elders and disabilities? These are places for design to make values.</MainText>
    </Section>

  </WorkPage>
)

export default SmartPill
