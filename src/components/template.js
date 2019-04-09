import styled from 'styled-components'

export const BannerGroup = styled.div`
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding-top: 200px;

  background: ${props => props.gradient_start};
  background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
  background-repeat: no-repeat;
  background-position: right bottom;
`

export const TitleGroup = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: calc(48px + 2em);
  box-sizing: border-box;
`

export const Title = styled.h1``

export const Subtitle = styled.h2``

export const InfoPanelGroup = styled.div`
  width: 80%;
  max-width: 1440px;
  height:auto;
  margin: 200px auto 200px auto;
  padding-left: calc(48px + 2em);
  box-sizing: border-box;
  overflow:auto;
`

export const InfoGroup = styled.div`
  min-width: 18%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
`
export const InfoTitle = styled.h6``

export const InfoText = styled.p`
  margin: 0;
  color: #aaa;
`

export const Image = styled.img`
  width: 80%;
  max-width: 1440px;
  height: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  display:block;
  overflow:auto;
`

export const Section = styled.div`
  width: 80%;
  max-width: 1440px
  margin: 200px auto;
  box-sizing: border-box;
  padding-left: calc(48px + 2em);
  ${'' /* overflow: auto; */}
`


export const SectionTitle = styled.h4``

export const StepContainerGroup = styled.div`
  width: 100%;
  overflow: auto;
  margin: 100px 0;
`

export const StepTitle = styled.h5`
  width: 30%;
  padding-right: 10px;
  box-sizing: border-box;
  float: left;
`

export const StepNo = styled.span`
  width: auto;
  margin: 0;
  
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
  font-weight: 300;
  line-height: 1.65em;
  color: #ddd;
  
  & + & {
    margin-top: 20px;
  }
`

export const MainText = styled.p`
  display: block;
  width: 50%;
  height: auto;
  margin: 0 0 0 50%;

  & + & {
    margin-top: 2em;
  }
  
`

export const NoteText = styled.p`
  display: block;
  width: 50%;
  height: auto;
  margin: 2em 0 0 50%;
  color: #666;
  font-size: 1em;
  opacity: 1;
`

export const ChapterTitle = styled.h3``

export const SectionForImage = styled.div`
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
  padding: 200px 0;
  background: #222;
  background-clip: padding-box;
`

export const SectionForImageWhite = styled.div`
  display: block;
  width: 100%;
  padding: 200px 0;
  background: #fff;
  background-clip: padding-box;
`
