import { useState } from 'react'

import './App.css'
import Header from './pages/component/Header/Header'
import Banner from './pages/component/Banner/Banner'
import Guidecard from './pages/component/guidecard/Guidecard'
import Application from './pages/component/Application/Application'
import { Services } from './pages/component/Services/Services'
import TagPart from './pages/component/Tag-sec/TagPart'
import Community from './pages/component/Community/Community'
import Footer from './pages/component/Footer/Footer'

function App() {
  return (
    <>
       <Header />
       <Banner />
       <Guidecard />
       <Application />
       <Services />
       <TagPart />
       <Community />
       <Footer />
    </>
  )
}

export default App
