import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'

const Works = () => (
  <div className="container">
    {Object.keys(staticdata.cats).map(cat => (cat !== "selected") &&
      <div className="containerGroupShort">
        <h2>{cat}</h2>
        <div className="cardsGroup">
          {staticdata.cats[cat].map(name => 
            <Work data={staticdata.works[name]} fromList={cat} /> 
          )}
        </div>
      </div>
    )}
  </div>
)

export default Works
