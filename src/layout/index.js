import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import './normalize.css'
import './index.css'
import './fonts.css'

import FontUrl1 from "../fonts/AktivGrotesk-Medium.otf"
import FontUrl2 from "../fonts/AktivGrotesk-Bold.otf"



const Layout = ({ children }) => (
  <div>
   <Helmet
      title="zander.wang"
      meta={[
        { name: 'description', content: 'Zander Zhen Wang Portfolio' },
        { name: 'keywords', content: 'UX Designer Engineer Design Portfolio UMSI GoBlue' }
      ]}
    >
      <link rel="preload"
            as="font"
            href={FontUrl1}
            type="font/opentype"
            crossOrigin="anonymous" />
      <link rel="preload"
            as="font"
            href={FontUrl2}
            type="font/opentype"
            crossOrigin="anonymous" />
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

