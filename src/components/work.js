import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'



const WorkCardGroup = styled.div`
    margin:0 7em 0 0;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    width: auto;

    transition: 0 0;
    cursor: url(${require("../images/cursor.png")}), pointer;

    @media (max-width: 1224px) {
        margin:0 6em 0.6em 0;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 220px;
        display: block;
        padding-top: 170px;
        margin-bottom: 24px;
    }
`

const Title = styled.h1`
    margin: -0.2em 0 0 -0.1em;
    padding-left: 1.5px;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    cursor: url(${require("../images/cursor.png")}), pointer;

    // font-family: 'Aktiv Grotesk';
    font-weight: 600;
    text-transform: lowercase;
    font-size: 8.5em;
    line-height: 1.3em;
    color: white;
    opacity: 0.5;

    z-index: -2;
    transition: 0.2s;
    -webkit-transition: 0.2s;

    // &:after {
    //     content: " ";
    //     border-radius: 8px;
    //     width: 0;
    //     height:0.2em;
    //     bottom: 0.35em;
    //     left: 0;
    //     margin: 0;

    //     position: absolute;
    //     z-index: -1;
    //     display: inline-block;
    //     vertical-align: middle;
    //     transition: 0.6s;

    //     background: #fff;
    //     opacity: 0.2;

    //     @media (max-width: 768px) {
    //         transition: none;
    //         width: calc(100% + 25px);
    //     }
    // }

    @media (max-width: 1224px) {
        font-size: 6em;
    }

    @media (max-width: 768px) {
        font-size: 2em;
        padding-left: 24px;
        opacity: 1;
        z-index: 100;
        text-transform: none;
    }

    ${WorkCardGroup}:hover & {
        @media (min-width: 768px) {
            z-index: 100;
            color: white;
            opacity: 1;
            transform: translateX(-30px);
        }
    }
        
    ${WorkCardGroup}:hover &:after {
        @media (min-width: 768px) {
            width: calc(100% + 60px);
        }
    }
`

const Sub = styled.span`
    // font-family: 'Barlow';
    font-weight: 300;
    font-style: italic;
    font-size: 0.5em;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 0.3em;
    }
`

// const Subtitle = styled.p`
//     width: 250px;
//     margin: 0 0 0 42px;
//     padding-left: 1.5px;
//     position: absolute;

//     font-family: 'Barlow';
//     font-size: 1.2em;
//     line-height: 1.2em;
//     text-transform: lowercase;
//     color: white;
//     opacity: 0;

//     display: none;
//     z-index: -2;
//     transition: 0.2s 0;

//     @media (max-width: 1224px) {
//         margin: -15px 0 0 0;
//         font-size: 1.2em;
//     }

//     @media (max-width: 768px) {
//         display: none;
//     }

//     @media (min-width: 768px) {
//         ${WorkCardGroup}:hover & {
//             z-index: 0;
//             opacity: 0.9;
//             transform: translateX(-15px);
//             transition: 0.2s 1s;
//         }        
//     }
// `


const Image = styled.div`
    width: 500px;
    height: 750px;
    right: -64px;
    top: -100px;
    border-radius: 24px;
    position: absolute;
    z-index: -2;

    background: ${props => props.gradient_start};
    background-image: url(${props => props.image}), linear-gradient(to bottom, ${props => props.gradient_start} 25%, ${props => props.gradient_end} 100%);
    background-repeat: no-repeat;
    background-position: 52% 50%;
    object-fit: cover;
    transition: 0.4s;
    opacity: 0;
    overflow: hidden;

    @media (max-width: 1224px) {
        width: 400px;
        height: 600px;
        right: -64px;
        top: -69px;
        background-size: cover;
        
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 220px;
        border-radius: 16px;
        left: 0;
        top: 0;
        // margin: 10px 0 50px calc(-500%/90);
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

const No = styled.h4`
    margin: 0;
    padding:0 0 0.2em 0;
    position: relative;
    height: 1em;
    text-align: right;

    display: inline-block;

    // font-family: 'Barlow';
    text-transform: lowercase;
    font-size: 0.2em;
    
    color: white;
    opacity: 0.5;
    writing-mode: tb-rl;

    @media (max-width: 768px) {
        display: none;
    }
`

const Work = (props) => (
    <WorkCardGroup>
        <AniLink cover 
                 to={'/' + props.data.id} 
                 state={{ fromList: props.fromList }}
                 direction="down" 
                 bg="#111111" 
                 duration={1}>
            <Title>
                <No>{props.data.year % 100}</No>
                {props.data.title}
                <Sub>{props.data.sub}</Sub>
            </Title>
            {/* <Subtitle>{props.data.subtitle}</Subtitle> */}
            <Image image={require("../images/"+(props.data.id==="#"?"default":props.data.id)+"-cover.png")} gradient_start={props.data.gradient_start} gradient_end={props.data.gradient_end} />
        </AniLink>
    </WorkCardGroup>
)

export default Work
