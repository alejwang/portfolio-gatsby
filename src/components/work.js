import React from 'react'
import styled from 'styled-components'
// import { Link } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { progressPercentage } from 'style-value-types';

const WorkCardGroup = styled.div`
    margin:0 6.5em 0 0;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    // width: 100%;

    // transition: 0.8s;
    cursor: pointer;

    @media (max-width: 1224px) {
        margin:0 6em 0.6em 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 220px;
        display: block;
        margin:0 0 12px 0;
        padding-top: 170px;
    }
`

const Title = styled.p`
    margin: -0.2em 0 0 -0.1em;
    padding-left: 1.5px;
    position: relative;
    display: inline-block;
    white-space: nowrap;

    font-family: 'Barlow';
    font-weight: 600;
    text-transform: lowercase;
    font-size: 9em;
    line-height: 1.3em;
    color: white;
    opacity: 0.4;

    z-index: -2;
    transition: 0.2s;

    &:after {
        content: " ";
        width: 0;
        height:0.2em;
        bottom: 0.35em;
        left: 0;
        margin: 0;

        position: absolute;
        z-index: -1;
        display: inline-block;
        vertical-align: middle;
        transition: 0.6s;

        background: #fff;
        opacity: 0.1;

        @media (max-width: 768px) {
            transition: none;
            width: calc(100% + 20px);
        }
    }

    @media (max-width: 1224px) {
        font-size: 6em;
    }

    @media (max-width: 768px) {
        font-size: 2.5em;
        opacity: 1;
        z-index: 100;
    }

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            z-index: 100;
            opacity: 1;
            transform: translateX(-20px);
        }
    }
        
    ${WorkCardGroup}:hover &:after {
        @media (min-width: 768px) {
            width: calc(100% + 48px);
        }
    }
`

const Sub = styled.span`
    font-family: 'Barlow';
    font-weight: 300;
    font-style: italic;
    font-size: 0.5em;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 0.3em;
    }
`

const Subtitle = styled.p`
    width: 380px;
    margin: -25px 0 0 0;
    padding-left: 1.5px;
    position: absolute;

    font-family: 'Barlow';
    // font-weight: 400;
    // font-style: italic;
    font-size: 1.5em;
    text-transform: lowercase;
    color: white;
    opacity: 0;

    display: none;
    z-index: -2;
    transition: 0.2s;

    @media (max-width: 1224px) {
        margin: -15px 0 0 0;
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        display: none;
    }

    @media (min-width: 768px) {
        ${WorkCardGroup}:hover & {
            z-index: 0;
            opacity: 0.7;
            transform: translateY(-15px);
        }        
    }
`


const Image = styled.div`
    width: 500px;
    height: 750px;
    left: 24px;
    top: -100px;
    position: absolute;
    z-index: -2;

    background: ${props => props.gradient_start};
    background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
    background-repeat: no-repeat;
    background-position: 52% 50%;
    object-fit: cover;
    transition: 0.4s;
    opacity: 0;

    @media (max-width: 1224px) {
        width: 400px;
        height: 600px;
        left: 16px;
        top: -69px;
        background-size: cover;
        
    }
    @media (max-width: 768px) {
        width: 100vw;
        height: 220px;
        left: 0;
        top: 0;
        margin: 10px 0 50px calc(-500%/90);
        z-index: 0;
        opacity: 1;   
    }

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            z-index: -1;
            transform: translate(20px, 30px);
            background-position: center;
            opacity: 1;
        }
    }
`

const No = styled.p`
    margin: 0;
    position: relative;
    height: 1em;
    text-align: right;

    display: inline-block;

    font-family: 'Barlow';
    text-transform: lowercase;
    font-size: 0.2em;
    
    color: white;
    opacity: 0.6;
    writing-mode: tb-rl;
`

const Work = props => (
    <WorkCardGroup>
        <AniLink cover to={'/'+props.id} state={{list: props.list}} direction="down" bg="#111111" duration={1}>
            <Title><No>{props.year % 100}</No>{props.title}<Sub>{props.sub}</Sub></Title>
            <Subtitle>{props.subtitle}</Subtitle>
            <Image image={props.image} gradient_start={props.gradient_start} gradient_end={props.gradient_end} />
        </AniLink>
    </WorkCardGroup>
)

export default Work
