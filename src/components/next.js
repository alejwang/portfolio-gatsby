import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NextContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: calc(48px + 2em);
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: 1224px) {
    padding-left: 0;
  }
`


const NextGroup = styled.div`
    @media (max-width: 768px) {
        max-width: 50%;
    }
`

const NextGroupRight = styled.div`
    text-align: right;
    @media (max-width: 768px) {
        max-width: 50%;
    }
`

const NextName = styled.p`
    margin: 0;

    font-size: 0.9em;
    color: #999;

`

const NextWork = styled.p`
    margin: 0;

    font-size: 2em;
    font-family: 'DIN';
    font-weight: 300;
    font-style: italic;
    color: #999;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }

    &:hover {
        color: #ED9849;
    }
` 

const Hr = styled.hr`
    margin: 200px 0 50px 0;
`

const Next = props => (
    <div>
        <Hr/>
        <NextContainer>
            <NextGroup>
                { props.left_id === '#' ? (<NextName>this is the first one</NextName>) : <NextName>prev</NextName> }
                { props.left_id === '#' ? "" : <AniLink cover to={props.left_id} direction="right" bg="#111"><NextWork> &lt; {props.left_name}</NextWork></AniLink> } 
            </NextGroup>
            <NextGroupRight>
                { props.right_id === '#' ? (<NextName>this is the last one</NextName>) : <NextName>next</NextName> }
                { props.right_id === '#' ? "" :<AniLink cover to={props.right_id} direction="left" bg="#111"><NextWork> {props.right_name} &gt; </NextWork></AniLink> }
            </NextGroupRight>
        </NextContainer>
    </div>
)


export default Next
