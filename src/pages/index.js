import React from 'react'
import Link from 'gatsby-link'
import WorkCard from '../components/work'

const IndexPage = () => (
  <div className="container">
    <div className="containerGroup">
      <h1>be what’s next<br/>… w/ design and tech<br/>this is Zhen, a fresh ux designer</h1>
    </div>
    <div className="containerGroup">
      <h2>Selected projects</h2>
      <div className="cardsGroup">
        <WorkCard 
          image={require("../images/alipay-cover.png")}
          gradient_start="#153c88" 
          gradient_end="#3068e8"
          id="alipay"
          title="Alipay"
          subtitle="Next to connected city service era"
        />
        <WorkCard 
          image={require("../images/uatmich-cover.png")}
          gradient_start="#032859" 
          gradient_end="#16319D"
          id="uatmich"
          title="U@Mich"
          sub=" / tba"
          subtitle="Next to info sharing"
        />
        <WorkCard 
          image={require("../images/default-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="Tide Mobile"
          sub=" / tba"
          subtitle="Next to educational productivity"
          text="Redefine a new school lifestyle with more fun, accessible for everyone in one touch"
        />
        <WorkCard 
          image={require("../images/default-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="SmartPill"
          sub=" / tba"
          subtitle="Next to pharmacy business mode"
          text="Fulfill the urgent need of busy patients and chronic disease patients in China in alternative ways"
        />
        <WorkCard 
          image={require("../images/default-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="Sketch Clip"
          sub=" / tba"
          subtitle="Next to lazy designers"
          text="What will Git for Designer look like... What? OK... You don't know Git..."
        />
        <WorkCard 
          image={require("../images/inforest-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="Inforest Space"
          sub=" / tba"
          subtitle="Next to non-touch interaction"
          text="Invoke deep dreams of forest in heavy city mist by a beatiful heart travel"
        />
        <WorkCard
          image={require("../images/default-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="Edge Shelter For Animals"
          sub=" / tba"
          subtitle="Next to homeless animals"
          text="Design for animals with a view of animals to make an shelter for us animals - all the way from fund to adoption"
        />
        <WorkCard
          image={require("../images/default-cover.png")}
          gradient_start="#626262" 
          gradient_end="#626262"
          id="#"
          title="Int. Education"
          sub=" / tba"
          subtitle="Next to intro coding education"
          text="Design for animals with a view of animals to make an shelter for us animals - all the way from fund to adoption"
        />
      </div>
    </div>
  </div>
)

export default IndexPage
