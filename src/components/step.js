import React from 'react'
import styled from 'styled-components'

const StepContainerGroup = styled.div`
  width: 100%;
  overflow: auto;
  padding: 64px 0;
  white-space: pre;
`

const StepTitle = styled.h4`
  width: 30%;
  padding-right: 10px;
  box-sizing: border-box;
  white-space: pre-line;
  ${'' /* word-break:break-all; */}
  float: left;
`

const StepNo = styled.span`
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

const StepText = styled.p`
  display: block;
  width: 55%;
  float: right;
  margin: 0;

  font-size: 1.05em;
  font-weight: 300;
  line-height: 1.6em;
  white-space: pre-line;
  color: #ccc;
`

const Step = props => (
    <StepContainerGroup>
        <StepNo>{props.no}</StepNo>
        <StepTitle>{props.title}</StepTitle>
        <StepText>{props.text}</StepText>
    </StepContainerGroup>
)

export default Step