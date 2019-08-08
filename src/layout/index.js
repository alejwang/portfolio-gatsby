import React from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './normalize.css'
import './index.css'
import './fonts.css'



const Layout = ({ children }) => (
  <div>
   <Helmet
      title="zander.wang"
      meta={[
        { name: 'description', content: 'Zander Zhen Wang Portfolio' },
        { name: 'keywords', content: 'UX Designer Engineer Design Portfolio UMSI GoBlue' }
      ]}
    />
    <Header/>
    {children}
    <Footer />
  </div>
)

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout

