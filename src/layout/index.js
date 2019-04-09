import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './normalize.css'
import './fonts.css'
import './index.css'



const Layout = ({ children }) => (
  <div>
   <Helmet
      title="alejandro.wang"
      meta={[
        { name: 'description', content: 'Alejandro Zhen Wang Portfolio' },
        { name: 'keywords', content: 'UX Designer Engineer Design Portfolio UMSI GoBlue' }
      ]}
    />
    <Header/>
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

