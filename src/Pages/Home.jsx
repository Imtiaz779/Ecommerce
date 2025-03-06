import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MultiBanner from '../components/MultiBanner'
import NewCollection from '../components/NewCollection'
import MidBanner from '../components/MidBanner'
import TopSeller from '../components/TopSeller'
import  Features  from '../components/Features'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <MultiBanner/>
      <NewCollection/>
      <MidBanner/>
      <TopSeller/>
      <Features/>
     
    </div>
  )
}

export default Home