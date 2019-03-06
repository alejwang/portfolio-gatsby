import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import InfoPanel from '../components/info-panel';

const Container = styled.div`

`

const ContainerGroup = styled.div`
  width: 80%;
  margin: 0 10%;
  box-sizing: border-box;
  padding: 0 0 0 calc(48px + 2em);
  /* text-align: center; */
}
`

const ContainerGroupWide = styled.div`
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  padding: 200px 0 0 calc(48px + 2em + 10%);
  /* text-align: center; */

  background: #BFD8E6 url(${props => props.image}) no-repeat;
  background-position: right center;
`

const Title = styled.h1`
  margin: 0;

  font-weight: 300;
  font-size: 3em;
  font-style: italic;
  line-height: 1.5;
  color: white;
`

const Subtitle = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 1.5em;
  font-style: italic;
  line-height: 1.5;
  color: white;
`

const Description = styled.p`
  margin: 0;

  font-weight: 300;
  font-size: 1em;
  ${'' /* font-style: italic; */}
  line-height: 1.5;
  color: white;
`

const Alipay = () => (
  <Container>
    <ContainerGroupWide image={require("../images/alipay-cover.png")}>
      <Title>Alipay</Title>
      <Subtitle>Next to connected city service era - <br/> What high-level view I learned <br/> from working for Alipay in Ant Finiancial</Subtitle>
    </ContainerGroupWide>
    <InfoPanel></InfoPanel>
  </Container>
)

export default Alipay
