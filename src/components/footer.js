import React from 'react'
import Link from 'gatsby-link'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="Copyright">
          <p>© crafted in San Diego / Ann Arbor</p>
        </div>
        <div className="PersonalLinks">
          <a href="https://www.instagram.com/alejwang/">ig</a>
          <a href="https://www.linkedin.com/in/alejwang/">in</a>
        </div>
      </footer>
    )
  }
}

export default Footer
