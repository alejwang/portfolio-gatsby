import styled from 'styled-components'

export const BannerGroup = styled.div`
  width: 100%;
  min-height: 600px;
  box-sizing: border-box;
  padding: 200px 0 0 calc(48px + 2em + 10%);
  /* text-align: center; */

  background: ${props => props.gradient_start};
  background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
  background-repeat: no-repeat;
  background-position: right bottom;
`

export const Title = styled.h1``

export const Subtitle = styled.h2``

export const InfoPanelGroup = styled.div`
  width: 80%;
  height:auto;
  margin: 200px 10% 100px 10%;
  box-sizing: border-box;
  padding-left: calc(48px + 2em);
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
  height: auto;
  margin: 100px 10%;
  box-sizing: border-box;
  ${'' /* padding-left: calc(48px + 2em); */}
  overflow:auto;
`

export const Section = styled.div`
  width: 80%;
  max-width: 1200px
  margin: 100px auto;
  box-sizing: border-box;
  ${'' /* padding-left: calc(48px + 2em); */}
  ${'' /* overflow: auto; */}
`

export const SectionTitle = styled.h3``

export const StepContainerGroup = styled.div`
  width: 100%;
  overflow: auto;
  margin: 100px 0;
`

export const StepTitle = styled.h4`
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
  float: right;
  margin: 0;

  font-size: 1.05em;
  font-weight: 300;
  line-height: 1.65em;
  color: #ddd;
  
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
