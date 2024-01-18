import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../utils/utils'
import Loading from '../../loading/Loading'

const Team = () => {
    const [team ,setTeam] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    
    useEffect(()=>{
        setIsLoading(true)
        fetch(`${BASE_URL}/team/`)
        .then(res=> res.json())
        .then(result => {
            setIsLoading(false)
            setTeam(result)
        })
        .catch(err => console.log(err))
    },[])


  return (
    <div className='bg-black'>
        <div className='container mx-auto container-team'>
        <h3 className='text-start text-bolder title-team'>Sequence Team</h3>
        <div className='team-list container mx-auto pt-3 '>
            {
                isLoading ? <Loading/> : (
                    team.map( t => (
                        <div 
                        className='d-flex flex-column justify-content-start align-items-start  gap-3'
                        
                        key={t._id}>
                            <img src={t.img[0]} alt={t.name} width={150} height={150} className='rounded-3' />
    
                            <div className='d-flex flex-column gap-1 justify-content-start align-items-start'>
                                <span className='text-bolder'>{t.name}</span>
                                <span>{t.title}</span>
                            </div>
    
                            <p className='text-start'>
                                {t.desc}
                            </p>
    
                        </div>
                    ))
                )
            }
               
        </div>
    </div>
    </div>
    
  )
}

export default Team

