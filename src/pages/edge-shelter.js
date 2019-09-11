import React from 'react'
import WorkPage from '../components/workpage'
import { ChapterTitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, InlineImage, Section, SectionForImages, SmallTitle, SectionTitle, MainText } from '../components/template';



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
        The Edge (Shelter) between human & animals: Start with a view of animals to make a shelter for our animals from fund to adoption.
        </MainText>
        <MainText>
          My Role: <br/>
          As the team leader, I and my teammates conducted 'product' research in the animal saving methods, and make a unique plan and design from the track of animals. I was in charge of the plan developing and also the technical engineering design.
        </MainText>

    </InfoPanelGroup>

    <Section>
      <ChapterTitle>overview</ChapterTitle>
      <SectionTitle>The purpose is not only to design a shelter for animals to live but also to facilitate adoption by dialogue with the urban areas.</SectionTitle>
      <InlineImage src={require("../images/edge-shelter-environment.png")} />
      <MainText>
      Located on the bank of Qian Tang River in Hangzhou, which is away from the downtown area, the site can be defined as an ‘’Isolated island “. Based on the existed low-grade adoption, the location is undeniable add difficulty to the operation of the animal shelter. Therefore, the purpose of design is to facilitate adoption by creating an efficient dialogue with the urban area by building a systematic relationship with the outside public.
      </MainText>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>systematic analysis</ChapterTitle>
      <SectionTitle>We decide to design this building as we do on a product or service. By site analysis and program diagram, we could understand the need for animal in spaces.</SectionTitle>

      <InlineImage src={require("../images/edge-shelter-site.png")} />
      <SmallTitle>City boundry</SmallTitle>
      <MainText>
      A harmonious society is not only the harmony between people but also about man and animals. Animals, just like humans, crave happiness and fear for death. With the acceleration of urbanization, the number of pets is increasing, and the number of stray animals is increasing at the same time. More and more stray animals have brought about a series of social, environmental and health problems. At present, only a part of the economically developed areas in China has government-set-up shelters. However, these institutions are often encountered operating crisis due to the low occupancy rate, difficulty on funds, lack of social concerns and other problems. Since the site is located on the edge of the city, away from the city center, there is no doubt that it increases the difficulty of the operation of the shelter.
      </MainText>

      <InlineImage src={require("../images/edge-shelter-program.png")} />
      <SmallTitle>Program diagram</SmallTitle>
      <MainText>
          It reveals that most of the three streamlines is organized linearly with a substantial intersection between each other, according to the analysis of the flow line. Thus, it is possible to create different kinds of space, producing a variety of node effect, and obtain the most convenient streamline organization mode by researching the form of the intersection of the three linear streamlines by means of typology.
      </MainText>

      <InlineImage src={require("../images/edge-shelter-shape.png")} />
      <SmallTitle>Inside realization</SmallTitle>
      <MainText>Based on the diagram, we tried to generate a shape for the shelter where every activity can be made without interruptions.</MainText>
      

      <InlineImage src={require("../images/edge-shelter-flow.png")} />
      <SmallTitle>Outside eco-system</SmallTitle>
      <MainText>The goal of promoting animal shelter cannot be achieved through internal system design. Although the main users of animal shelter are the stray animals, the real operator is human being. Consequently, it is necessary for human beings to help them contact with external social organizations where the holding area, the medical district and the volunteer club will play important roles with.</MainText>

      <SectionTitle>Instead of an elegant place to live in, what we think as animals is to make the service running well in the shelter place.</SectionTitle>
    </Section>

    <hr/>
    <Section>
      <ChapterTitle>plan</ChapterTitle>
      <SectionTitle>With public space in the intersection joints, the spaces are dynamic for both animals and people.</SectionTitle>
    </Section>

    <SectionForImages white>
      <Image src={require("../images/edge-shelter-plan1.png")} /> 
      <Image src={require("../images/edge-shelter-plan2.png")} /> 
    </SectionForImages>
    
    <hr/>
    <Section>
      <ChapterTitle>showcase</ChapterTitle>
    </Section>
    <Image src={require("../images/edge-shelter-render.png")} /> 
    <Section>
      <MainText>The second floor of the building is released to the public as a Qiantang River sightseeing stand. Every year millions of visitors will be attracted by the Qian Tang River tide, therefore the sightseeing stand will attract huge crowds and potential customers for the animal shelter. Walking on the trail, the sight will effectively interact with the hospitals on the third floor and the shelter space on the ground. Besides, the tide season, the public space is still a good choice for residents to relax and take a walk.</MainText>
      <SectionTitle>We hope our in-and-out design can help the public realize every activity is a part of the social system, shelters without considering adoption could only solve the problems on the surface.</SectionTitle>
      <MainText>With the increasing number of stray animals, relying solely on the expansion of the size and number of shelters is no longer plausible to solve the problem. Seeming like provide a comfortable home for the stray, it increases the social burden, as well as an excuse for the animal abandoners. We propose to take adoption as the ultimate goal, aiming to promote virtuous circulation among human and resources, and it contributes to, and finally will create a lasting and eternal wonderland for the stray animals.</MainText>
    </Section>

    <Image src={require("../images/edge-shelter-final.png")} /> 
  </WorkPage>
)

export default EdgeShelter
