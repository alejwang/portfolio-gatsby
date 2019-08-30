import React from 'react'
import Helmet from 'react-helmet'
import Next from '../components/next'
import { ChapterTitle, SectionForImages, SectionForImagesFlex, ImageText, NoteText, TitleGroup, BannerGroup, Title, Subtitle, InfoPanelGroup, InfoGroup, InfoTitle, InfoText, Image, Section, SectionTitle, MainText, StepContainerGroup, StepTitle, StepNo, StepText, SmallTitle, InlineImage } from '../components/template';
import DeviceMockUp from '../components/devicemockup'

const workTitle = 'Sketch Clip'

const SketchClip = () => (
  <div>
    <Helmet
      title= {"zander.wang - " + workTitle}
    />

    <BannerGroup image={require("../images/sketch-clip-cover.png")} gradient_start="#1929E4" gradient_end="#FF8029">
      <TitleGroup>
        <Title>{workTitle}</Title>
        <Subtitle>Lalala</Subtitle>
      </TitleGroup>
    </BannerGroup>

    <InfoPanelGroup>
        <InfoGroup>
          <InfoTitle>Course</InfoTitle>
          <InfoText>2018</InfoText>
        </InfoGroup>
        <InfoGroup>
          <InfoTitle>Adviser</InfoTitle>
          <InfoText><a href="http://michael-nebeling.de">Michael Nebeling<span className="linkarrow">></span></a></InfoText>
        </InfoGroup>
        <MainText>
          Sketch Clip is a tool designed for Sketch users to create and manage file versions in an elegant way. Designers can use this tool to undo or redo their changes, and to collaborate with coworkers.
        </MainText>
        <MainText>
          In 14 weeks, I applied Double Diamond methods starting from brainstorming and ideations, to the focused problem statement and final solution.
        </MainText>
    </InfoPanelGroup>

    <Image src={require("../images/sketch-clip-timeline.png")} /> 


    <Section>
      <ChapterTitle>overview</ChapterTitle>
      <SectionTitle>Sketch Clip is one place for version control + seamless collaborate experience, designed for Sketch app.</SectionTitle>
      
    </Section>



    <SectionForImagesFlex>
      <DeviceMockUp macbook video={require("../images/sketch-clip-prototype.mp4")} text="0:07 - Create new project by analysing the local files.  0:25 - Show versions and branchers and design changes. 0:57 - Pull new versions, deal with conflicts and push new changes to the cloud."/>
    </SectionForImagesFlex>

    <Section>
      <SmallTitle>Problem Statement</SmallTitle>
      <MainText>
      Without an optimized version control tool, UX designers have difficulties in both organizing their own sketch files and keeping files received from other designers up to date. Therefore, I want to design a version control tool for sketch files.
      </MainText>
      <InlineImage src={require("../images/sketch-clip-intro.png")} /> 
      <SmallTitle>How it works</SmallTitle>
      <MainText>
      Sketch Clip will host your files and manage versions/branches on cloud, and generate change-log. Users can import local files by one drag, and collaborate with the others using a Sketch plugin.
      </MainText>
      <SmallTitle>Who should use it</SmallTitle>
      <MainText>
       Student can use Sketch Clip to organize him/her/their design files in one place and look for any version easily. Also, in a design group using Sketch Clip, the manager/designers can follow the project’s design traces, put all the group files in one place and improve the team efficiency by checking auto change-log and solving conflict among different changes with merge feature.
      </MainText>
    </Section>

    <hr />

    <Section>
      <ChapterTitle>step 1 - Discover</ChapterTitle>
      <SectionTitle>How Sketch Clip was born... as an idea? Imagine how it works, see how others work, and identify what users want.</SectionTitle>
      
      <InlineImage src={require("../images/sketch-clip-competitive.png")} /> 
      <SmallTitle>Competitive Analysis</SmallTitle>
      <MainText>
      I compare six major tools designers used for file organizing, version control and collaborations based on files. Current features that help designers smoothly and elegantly are quite rare. 
      </MainText>
      <MainText>
        Figma can be considered as the most complete solution because it prevents conflicts and keeps up-to-date all the time. However, Figma and Sketch can't be used together. Other solutions like Git or Dropbox are more traditional version systems, which are based on files or bytes, not layers or visual components.
      </MainText>
      

      <SmallTitle>Semi-constructed Interviews</SmallTitle>
      <MainText>
      From my observation in the real world, although designers don't have a perfect solution, they created some ways to deal with this pain. So the key of interview is to understand what kind of feature they want, and how they behave currently without a perfect method. 
      </MainText>
      <StepContainerGroup>
        <StepNo>Finding 01</StepNo>
        <StepTitle>Current actions are files renaming and additional comments. </StepTitle>
        <StepText>The interviewees usually duplicate the files to keep backups, and will rename the file with date or comments. When they send the files, they usually attach another comment about how this change (or just simply "this is today's latest version'). However, since designers can't check received files immediately, they usually forgot about the comments.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Finding 02</StepNo>
        <StepTitle>The most common problem is about visual design.</StepTitle>
        <StepText>Two of the interviewees (as UX Designers) mentioned they had trouble finding a past version or resources to reuse. The main reason is they can't rememeber what they did days before, and some versions only have tiny differences.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Finding 03</StepNo>
        <StepTitle>The worst experience is asked to go back to 10 days ago, not 1 day ago. </StepTitle>
        <StepText>"I don't mind if I redo 10 steps. But I can't redo all when somebody said to me he likes my design last week than the current one". Interviewees said they don't want every backup for a single action. Also, all of them think create versions manully (not automatically) is better and easy to understand!</StepText>
      </StepContainerGroup>

      <InlineImage src={require("../images/sketch-clip-storyboard.png")} />
      <SmallTitle>Storyboard</SmallTitle>
      <MainText>
        To explore the design space, I use the storyboard to come up with 8 ideas/actions after researches. They aim at different aspects in version control or collaborations. Together they make a complete storyline, from 1 to 8.
      </MainText>
      
    </Section>

    <hr />

    <Section>
      <ChapterTitle>step 2 - Define</ChapterTitle>
      <SectionTitle>Define target users and scenes by researches to narrow down the design scope.</SectionTitle>
      <InlineImage src={require("../images/sketch-clip-persona.png")} />
      <SmallTitle>Personas</SmallTitle>
      <MainText>
      I created three personas - a student in UX field, a manager in a company (shown above), and another negative persona as an individual fashion designer who may not need Sketch Clip.
      </MainText>
      <InlineImage src={require("../images/sketch-clip-storymap.png")} />
      <SmallTitle>Storymapping</SmallTitle>
      <MainText>
      I also used a story map to construct the flow for a design manager who just start using Sketch Clip. The map also shows several needs that my solution can intervene. Using this storymap, I can broad or narrow down the design scope based on different needs I listed. 
      </MainText>
    </Section>


    <hr />

    <Section>
      <ChapterTitle>step 3 - Develop</ChapterTitle>
      <SectionTitle>Start sketching, paper prototyping and expanding features in wireframes. Reorganize some features and workflows in paper, lo-fi and hi-fi prototypes.</SectionTitle>
    </Section>
    <SectionForImages white>
      <Image src={require("../images/sketch-clip-wireframe.png")} />
    </SectionForImages>

    <hr />

    <Section>
      <ChapterTitle>step 4 - Deliver</ChapterTitle>
      <SectionTitle>Deliver to early users before iteration. After each round of prototyping, I committed usability testing to know which parts works well or not well. </SectionTitle>
      <InlineImage src={require("../images/sketch-clip-tests.png")} />
      <SmallTitle>Iteration</SmallTitle>
      <MainText>After the testings, I made some changes on my design based on the feedback. In the defect log I used to categorize, most of the feedbacks fell into confusing or error handling issues.</MainText>

      <StepContainerGroup>
        <StepNo>Iteration 01</StepNo>
        <StepTitle>Provide more clear instructions and a intro video at the beginning. </StepTitle>
        <StepText> “What if I close my Sketch but I forget to update the version” Obviously, users still have questions about this tool. That's why Sketch Clip needs more instant instructions for users. For example, when user close Sketch without committing, a pop-up will show up to notify the user.</StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Iteration 02</StepNo>
        <StepTitle>Use more ways to show differences, in different views.</StepTitle>
        <StepText>“Not sure you UI scales well. What if I made 150 changes to one file, What does that look like?” The final version has 3 ways to show design differences - hover to view in project detail page, version review page in full screen, and another log PDF for offline usage. </StepText>
      </StepContainerGroup>
      <StepContainerGroup>
        <StepNo>Iteration 03</StepNo>
        <StepTitle>Redesign the branch tree. </StepTitle>
        <StepText>“I can’t understand why the versions are 4.0, 4.01, 4.01b. So what’s the next?” “Can I tell different branches by different colors- main branches or others?” To make the tree look simple, users now can fold the old version into one line. Also, in the new design, users can drag the branch to rearrange, for instance, to put launched version in the middle line.</StepText>
      </StepContainerGroup>

      <SmallTitle>Impact</SmallTitle>
      <MainText>I received nice feedback about Sketch Clip from real designers - potential users say the software can really help! Based on current technology, Sketch Clip is not only an idea, but can be a developed software solving a current problem in lower costs than Figma or Github Large Files service. It can help individual designers and small groups to save time and energy in version control.</MainText>

    </Section>


    <Next left_id="sihunt" left_name="SI Hunt" right_id="tide-mobile" right_name="Tide Mobile"/>
  </div>
)

export default SketchClip
