import React from 'react'
import Link from 'gatsby-link'
import './work.css'

const WorkCard = props => (
    <div className="WorkCard">
        <Link to={props.id}><h3>{props.title}</h3></Link>
        <h6>{props.subtitle}</h6>
        <img src={props.image} />
        {/* <p>{props.text}</p> */}
    </div>
)

export default WorkCard