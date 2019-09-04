import styled from 'styled-components'


export const InfoPanelGroup = styled.div`
  width: 90%;
  max-width: 1440px;
  height:auto;
  margin: 150px auto;
  padding-left: calc(48px + 2em);
  box-sizing: border-box;
  overflow:auto;

  @media (max-width: 1224px) {
    padding-left: 0;
    ${'' /* margin: 150px auto; */}
  }
  @media (max-width: 768px) {
    margin: 80px auto;
  }
`

export const InfoGroup = styled.div`
  min-width: 18%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;

  @media (max-width: 1224px) {
    margin-bottom: 50px;
    clear: left;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`
export const InfoTitle = styled.h6``

export const InfoText = styled.p`
  margin: 0;
  color: #aaa;
`

export const Image = styled.img`
  width: 90%;
  max-width: 1440px;
  // height: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  display:block;
  overflow:auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InlineImage = styled(Image)`
  width: 100%;
  margin: 150px auto;
`

export const Section = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 200px auto;
  box-sizing: border-box;
  padding-left: calc(48px + 2em);
  overflow: auto;
  @media (max-width: 1224px) {
    padding-left: 0;
    margin: 150px auto; 
  }
  @media (max-width: 768px) {
    margin: 80px auto;
  }
`


export const SectionTitle = styled.h4`
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 80px;
  }
`

export const StepContainerGroup = styled.div`
  width: 100%;
  overflow: auto;
  margin: 100px 0;

  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin: 80px 0;
  }
`

export const StepTitle = styled.h6`
  width: 30%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
  display: inline-block;

  @media (max-width: 1224px) {
    width: 20%;
  }
  @media (max-width: 768px) {
    float: none;
    width: auto;
    max-width:calc(100vw - 150px);
  }
`

export const StepNo = styled.span`
  width: auto;
  margin: 0;
  display: inline-block;
  position: relative;
  
  padding-right: 10px;
  box-sizing: border-box;
  float: left;

  font-size: 1.05em;
  font-weight: 400;
  line-height: 1.6em;
  color: #eee;

  &:after {
    content: "";
    width: 25px;
    height: 1px;
    display: inline-block;
    margin: 0 10px 0 12px;
    vertical-align: middle;
    
    background: #FFF;
    opacity: 0.25;
  }
`

export const StepText = styled.p`
  display: block;
  width: 50%;
  ${'' /* float: right; */}
  margin: 0 0 0 50%;

  font-size: 1.05em;
  line-height: 1.65em;
  color: #ddd;
  
  & + & {
    margin-top: 20px;
  }

  @media (max-width: 1224px) {
    width: 65%;
    margin: 0 0 0 35%;
  }
  @media (max-width: 768px) {
    clear: both;
    width: 100%;
    margin: 20px 0 0 0;
  }
`

export const SmallTitle = styled.h5`
  width: 40%;
  box-sizing: border-box;
  float: left;

  @media (max-width: 1224px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    clear: left;
    margin-bottom: 50px;
    width:100%;
  }

`

export const MainText = styled.p`
  display: block;
  width: 50%;
  height: auto;
  margin: 0 0 150px 50%;

  & + & {
    margin-top: -100px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1224px) {
    width: 65%;
    margin-left: 35%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 120px 0;
  }
`

export const NoteText = styled(MainText)`
  margin: 2em 0 0 50%;
  color: #888;
  font-size: 1em;
  @media (max-width: 1224px) {
    width: 65%;
    margin-left: 35%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`

export const ChapterTitle = styled.h3``

export const SectionForImagesFlex = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;

  width: 100%;
  margin: ${props => props.lesspadding ? "150px auto 0 auto" : "150px auto"};
  padding: ${props => props.lesspadding ? "150px 0 0 0" : "150px 0"};
  background: #222;
  background-clip: padding-box;
  @media (max-width: 768px) {
    margin: ${props => props.lesspadding ? "80px auto 0 auto" : "80px auto"};
    padding: ${props => props.lesspadding ? "80px 0 0 0" : "80px 0"};
    box-sizing: border-box;
  }
`


export const SectionForImages = styled.div`
  display: block;
  width: 100%;
  padding: 150px 0;
  background: ${props => props.white ? "#fff" : "#222"};
  
  background-clip: padding-box;
  @media (max-width: 768px) {
    padding: 80px 5%;
    box-sizing: border-box;
  }
`

export const ImageText = styled.p`
  display: block;
  width: calc(50% - 24px - 3em);
  max-width: 680px;
  height: auto;
  margin: 3em 0 -1em calc(50% + 24px + 1em);
  color: #888;
  font-size: 1em;
  opacity: 1;
  @media (max-width: 1224px) {
    width: 65%;
    margin-left: 35%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`