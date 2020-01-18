import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import staticdata from '../staticdata.json'

const NextContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 200px 36px 36px 36px;
  margin: 0;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 100px 18px 18px 18px;
    }
`

const NextGroup = styled.div`
    
`

const NextGroupRight = styled.div`
    text-align: right;
    flex: 1 1 auto;
`

const NextName = styled.p`
    margin: 0;
    font-size: 0.9em;
    color: #666;
`

const NextWork = styled.p`
    margin: 0;
    font-size: 1.6em;
    font-weight: 600;
    color: #999;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    &:hover {
        color: #ED9849;
    }
` 

// const Hr = styled.hr`
//     margin: 200px 0 50px 0;
// `

class NextNav extends React.Component {
    render() {
        const workList = staticdata.cats[(this.props.fromList)]
        const indexInList = workList.indexOf(this.props.currentPage)
        const isFirst = (indexInList === 0)
        const isLast = (indexInList === workList.length - 1)
        const listName = (this.props.fromList === "all" ? '' : this.props.fromList)
        
        return(
            <div>
                {/* <Hr/> */}
                <NextContainer>
                    <NextGroup>
                        { isFirst ? (<NextName>this is the first {listName} project</NextName>) : <NextName>prev</NextName> }
                        { isFirst ||
                            <AniLink cover to={'/'+staticdata.works[workList[indexInList - 1]].id} direction="right" bg="#111">
                                <NextWork>← {staticdata.works[workList[indexInList - 1]].title}</NextWork>
                            </AniLink> 
                        } 
                    </NextGroup>
                    <NextGroupRight>
                        { isLast ? (<NextName>this is the last {listName} project</NextName>) : <NextName>next {listName} project</NextName> }
                        { isLast ||
                            <AniLink cover to={'/'+staticdata.works[workList[indexInList + 1]].id} direction="left" bg="#111">
                                <NextWork> {staticdata.works[workList[indexInList + 1]].title} →</NextWork>
                            </AniLink> 
                        }
                    </NextGroupRight>
                </NextContainer>
            </div>
        )
    }
}

export default NextNav
