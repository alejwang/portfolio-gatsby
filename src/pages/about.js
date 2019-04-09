import React from 'react'
import { Image, Section,  StepContainerGroup, StepTitle, StepText } from '../components/template';
import pdf from "../files/Zhen_Wang_resume_2019.pdf"

const AboutPage = () => (

  <div className="container">
    <div className="containerGroupShort">
      <h1>hey, I am Zhen - an UX Designer studying at the University of Michigan, <br /> specializing in human-computer interaction.</h1>
      <h1>besides work, you may find me swimming 🏊 , <br />listening to pop/classic music  🎵, and grazing at bubble tea shops 🍶.</h1>
      <h1><a href={pdf}>check my resume <span className="linkarrow">></span></a> <a href="mailto:me@alej.wang?subject=alej.wang — Website Inquiry&body=Hey Zhen! It's nice to know you...">let's talk! <span className="linkarrow">></span></a></h1>
    </div>

    <Image src={require("../images/about-me.jpg")} alt="My portrait"/>

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
