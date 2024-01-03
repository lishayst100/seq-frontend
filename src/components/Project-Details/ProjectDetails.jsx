import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const {id} = useParams()
  return (
    <div className='' style={{paddingTop:500}}>ProjectDetails {id}</div>
  )
}

export default ProjectDetails