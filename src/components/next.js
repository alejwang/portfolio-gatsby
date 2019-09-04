import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import staticdata from '../staticdata.json'

const NextContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  padding-bottom: 100px;
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
    font-family: 'Barlow';
    font-weight: 600;
    // font-style: italic;
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

class NextNav extends React.Component {
    render() {
        const workList = staticdata.cats[(this.props.fromList)]
        console.log('workList:' + workList)
        const indexInList = workList.indexOf(this.props.currentPage)
        console.log('indexInList:' + indexInList)
        const isFirst = (indexInList === 0)
        const isLast = (indexInList === workList.length - 1)
        
        return(
            <div>
                <Hr/>
                <NextContainer>
                    <NextGroup>
                        { isFirst ? (<NextName>this is the first one</NextName>) : <NextName>prev</NextName> }
                        { isFirst ||
                            <AniLink cover to={'/'+staticdata.works[workList[indexInList - 1]].id} direction="right" bg="#111">
                                <NextWork> &lt; {staticdata.works[workList[indexInList - 1]].title}</NextWork>
                            </AniLink> 
                        } 
                    </NextGroup>
                    <NextGroupRight>
                        { isLast ? (<NextName>this is the last one</NextName>) : <NextName>next {this.props.fromList} project</NextName> }
                        { isLast ||
                            <AniLink cover to={'/'+staticdata.works[workList[indexInList + 1]].id} direction="left" bg="#111">
                                <NextWork> {staticdata.works[workList[indexInList + 1]].title} &gt; </NextWork>
                            </AniLink> 
                        }
                    </NextGroupRight>
                </NextContainer>
            </div>
        )
    }
}

export default NextNav
