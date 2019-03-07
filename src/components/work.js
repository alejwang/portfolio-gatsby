import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const WorkCardGroup = styled.div`
    /* width: 400px; */
    /* height: 300px; */
    margin:0 5em 3em 0;
    
    position: relative;
    /* overflow: hidden; */
    /* border-radius: 20px; */
    /* box-shadow: 0 20px 40px rgba(0,0,0, 0.15); */
    /* display: grid;
    grid-template-rows: 1fr 1fr; */
    transition: 0.8s;
    cursor: pointer;
`

const Title = styled.p`
    margin: 0;
    padding-left: 1.5px;
    position: relative;
    display: inline-block;

    font-family: 'DIN';
    font-weight: 300;
    font-style: italic;
    font-size: 4em;
    font-style: italic;
    color: white;
    opacity: 0.5;

    z-index: -2;
    transition: 0.2s;

    ${WorkCardGroup}:hover & {
        z-index: 0;
        opacity: 1;
        transform: translateY(-10px);
    }
`

const Subtitle = styled.p`
    width: 400px;
    margin: -10px 0 0 0;
    padding-left: 1.5px;
    position: absolute;

    font-family: 'DIN';
    font-weight: 400;
    font-style: italic;
    font-size: 1.5em;
    text-transform: lowercase;
    color: white;
    opacity: 0;

    z-index: -2;
    transition: 0.2s;

    ${WorkCardGroup}:hover & {
        z-index: 0;
        opacity: 0.7;
        transform: translateY(-15px);
    }
`

const Image = styled.div`
    width: 400px;
    height: 600px;
    left: 22px;
    top: -92px;
    position: absolute;
    z-index: -2;

    background: ${props => props.gradient_start};
    background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
    background-repeat: no-repeat;
    background-position: 52% 50%;
    object-fit:cover;
    transition: 0.6s;
    opacity: 0;

    ${WorkCardGroup}:hover & {
        z-index: -1;
        transform: translate(20px, 30px);
        background-position: center;
        opacity: 1;
    }
`

const WorkCard = props => (
    <WorkCardGroup>
        <Link to={props.id}><Title>{props.title}</Title></Link>
        <Subtitle>{props.subtitle}</Subtitle>
        <Image image={props.image} gradient_start={props.gradient_start} gradient_end={props.gradient_end} />
    </WorkCardGroup>
)

export default WorkCard