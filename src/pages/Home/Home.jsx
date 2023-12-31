import React from 'react'
import Video from '../../components/Home/Video/Video'
import './Home.scss'
import Text from '../../components/Home/Text/Text'
import Projects from '../../components/Projects/Projects'
const Home = () => {
  return (
    <div className='home'>
        <Video/>
        <Text/>
        <Projects/>
    </div>
  )
}

export default Home