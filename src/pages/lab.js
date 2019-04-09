import React from 'react'
import WorkCard from '../components/work'

const LabPage = () => (
  <div className="container">
    <div className="containerGroupShort">
      <h2>Experimental Projects</h2>
      <div className="cardsGroup">
        <WorkCard 
          image={require("../images/default-exp-cover.png")}
          gradient_start="#153c88" 
          gradient_end="#3068e8"
          id="#"
          title="Interactive Learning"
          sub=" / tba"
          subtitle="The future of textbook"
        />
        <WorkCard 
          image={require("../images/default-exp-cover.png")}
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

export default LabPage
