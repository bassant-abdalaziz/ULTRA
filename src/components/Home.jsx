import React from 'react'

import Header from './Header'
import Work from './Work'
import Portfolio from './Portfolio'
import Profile from './Profile'
import About from './About'
import SocialMedia from './SocialMedia'
import Footer from './Footer'


function Home() {
  return (
    <div >
      <Header />
      <Work />
      <Portfolio />
      <Profile />
      <About/>
      <SocialMedia/>
      <Footer />
    </div>
  );
}

export default Home;
