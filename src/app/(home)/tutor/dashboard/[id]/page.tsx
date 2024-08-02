import React from 'react'
interface PageProps{
    params : {
      id: string;
    }
  }
  

const Tutordashboard = ({params: {id}}: PageProps) => {
  return (
    <div>Tutordashboard</div>
  )
}

export default Tutordashboard