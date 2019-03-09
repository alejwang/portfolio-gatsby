import React from 'react'
import Link from 'gatsby-link'
import WorkCard from '../components/work'

const IndexPage = () => (
  <div className="container">
    <div className="containerGroup">
      <h2>Experimental Projects</h2>
      <div className="cardsGroup">
        <WorkCard 
          image={require("../images/default-cover.png")}
          gradient_start="#153c88" 
          gradient_end="#3068e8"
          id="#"
          title="Interactive Learning"
          sub=" / tba"
          subtitle="The future of textbook"
        />
        <WorkCard 
          image={require("../images/default-cover.png")}
          gradient_start="#153c88" 
          gradient_end="#3068e8"
          id="#"
          title="Passive Design Arch"
          sub=" / tba"
          subtitle="The future of energy saving"
        />
       
      </div>
    </div>
  </div>
)

export default IndexPage
