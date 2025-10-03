import React from 'react'
import { useParams } from 'react-router-dom'

function ServiceDetail() {
    const para = useParams()
  return (
    <div>ServiceDetail - {para.id}</div>
  )
}

export default ServiceDetail