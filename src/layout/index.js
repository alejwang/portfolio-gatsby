import React from 'react'
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
        { name: 'description', content: 'Zander Wang Portfolio' },
        { name: 'keywords', content: 'UX Designer Engineer Design Portfolio UMSI GoBlue' }
      ]}
    >
    </Helmet>
    <Header/>
    {children}
    <Footer />
  </div>
)

// Layout.propTypes = {
//   children: PropTypes.func,
// }

export default Layout

