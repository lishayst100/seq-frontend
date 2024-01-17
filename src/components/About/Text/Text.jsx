import React from 'react'
import { NavLink } from 'react-router-dom'

const Text = () => {
  return (
    <div >
        <p className='text-black text-start w-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus unde eum officiis aliquam saepe blanditiis eos vel reprehenderit, dolor inventore. Vero, ratione? Reiciendis laborum quia minus quisquam praesentium id optio.
        Reiciendis odio deserunt asperiores quibusdam animi pariatur similique quod. Fugiat corporis quam, magnam numquam iusto itaque qui dicta possimus porro. Aliquam dolore doloribus illo nisi ducimus est temporibus illum quasi.
        Magni dicta eveniet necessitatibus adipisci ratione? Iste, praesentium? Facilis nobis, id non necessitatibus natus qui culpa quibusdam molestiae eos adipisci aliquam error fuga? Minus voluptates exercitationem molestias iusto fugiat maxime?
        
        </p>
        <p className='text-black text-start w-75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus unde eum officiis aliquam saepe blanditiis eos vel reprehenderit, dolor inventore. Vero, ratione? Reiciendis laborum quia minus quisquam praesentium id optio.
        Reiciendis odio deserunt asperiores quibusdam animi pariatur similique quod. Fugiat corporis quam, magnam numquam iusto itaque qui dicta possimus porro. Aliquam dolore doloribus illo nisi ducimus est temporibus illum quasi.
        Magni dicta eveniet necessitatibus adipisci ratione? Iste, praesentium? Facilis nobis, id non necessitatibus natus qui culpa quibusdam molestiae eos adipisci aliquam error fuga? Minus voluptates exercitationem molestias iusto fugiat maxime?
        
        </p>

        <div className={'align-self-start  text-start w-75'}>
        <NavLink to="/contact" className={'color-blue text-decoration-none'}>Let's create together</NavLink>
        </div>
        
    </div>
  )
}

export default Text