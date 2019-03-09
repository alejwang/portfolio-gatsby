import React from 'react'
import Link from 'gatsby-link'
import WorkCard from '../components/work'
import { Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText } from '../components/template';


const AboutPage = () => (
  <div className="container">
    <div className="containerGroup">
      <h1>a synthesized project I've been working on for 24 years. <br />... all right you catch ME!</h1>
    </div>
    
    <Image src={require("../images/about-me.png")} /> 


    <Section>
    
      <StepContainerGroup>
        <StepTitle>before</StepTitle>
        <StepText>I was a coder at the beginning. I was an exploring architect. I like combination beauty between technology and design. Because once they being together, the mixing magic can make life easier and joyful. </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepTitle>now</StepTitle>
        <StepText>I am still exploring the world of coding and designing at the same time, especially the method of interaction design, user research, usability test, prototype coding and more at school. By some small projects, I realize my efforts can work out to help local community and organizations. I really enjoy my way of design - help people near me to solve their problems, then push it forward and broader.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepTitle>future</StepTitle>
        <StepText>Design for me is a curve line with points on it. Instead of drawing tons of points in random order or drawing one point at the time, going through the beautiful line is what I want to achieve. I'm graduating in April 2019 and looking for open and fun people to work with in summer 2018!   <br /><br />To be what’s next, is a hard thing to say. Even though I realize changing the status quo sometimes hurts, and the ideas won’t come true immediately. To design for a better future never goes wrong.</StepText>
      </StepContainerGroup>
    </Section>
  </div>
)

export default AboutPage
