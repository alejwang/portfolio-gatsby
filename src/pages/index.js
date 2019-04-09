import React from 'react'
import Work from '../components/work'

const IndexPage = () => (
  <div className="container">
    <div className="containerGroup">
      <h1>be what’s next<br/>… w/ design and tech<br/>this is Zhen, a fresh ux designer</h1>
    </div>
    <div className="containerGroup">
      <h2>Selected projects ▽</h2>
      <div className="cardsGroup">
        <Work
          image={require("../images/alipay-cover.png")}
          gradient_start="#153c88"
          gradient_end="#3068e8"
          id="alipay"
          title="Alipay"
          subtitle="Next to connected city service era"
          text="What high-level view I learned from working for Alipay in Ant Finiancial"
        />
        <Work
          image={require("../images/uatmich-cover.png")}
          gradient_start="#032859"
          gradient_end="#16319D"
          id="uatmich"
          title="UM Hunt"
          subtitle="Next to LBS educational social"
          text="Discovery app agile development for U of Mich freshmen"
        />
        <Work
          image={require("../images/tide-mobile-cover.png")}
          gradient_start="#E77826"
          gradient_end="#F6C38F"
          id="tide-mobile"
          title="Tide Mobile"
          subtitle="Next to campus lifestyle"
          text="Redefine how college students gath information and have fun, accessible for everyone in one touch"
        />
        <Work
          image={require("../images/smartpill-cover.png")} 
          gradient_start="#0C9D6A" 
          gradient_end="#3BD3AF"
          id="smartpill"
          title="SmartPill"
          subtitle="Next to pharmacy business mode"
          text="Fulfill the urgent need of busy patients and chronic disease patients in China in alternative ways"
        />
        <Work
          image={require("../images/inforest-cover.png")}
          gradient_start="#365B41"
          gradient_end="#596235"
          id="inforest"
          title="Inforest Space"
          subtitle="Next to non-touch interaction"
          text="Invoke deep dreams of forest in heavy city mist by a beatiful heart travel"
        />
        <Work
          image={require("../images/default-cover.png")}
          gradient_start="rgba(0,0,0,0)"
          gradient_end="rgba(0,0,0,0)"
          id="#"
          title="Sketch Clip"
          sub=" / tba"
          subtitle="Next to lazy designers"
          text="What will Git for Designer look like... What? OK... You don't know Git..."
        />
        <Work
          image={require("../images/default-cover.png")}
          gradient_start="rgba(0,0,0,0)"
          gradient_end="rgba(0,0,0,0)"
          id="#"
          title="Edge Shelter 4 🐱"
          sub=" / tba"
          subtitle="Next to homeless animals"
          text="Design for animals with a view of animals to make an shelter for us animals - all the way from fund to adoption"
        />
        <Work
          image={require("../images/default-cover.png")}
          gradient_start="rgba(0,0,0,0)"
          gradient_end="rgba(0,0,0,0)"
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
