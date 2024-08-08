import React from 'react'

interface PageProps{
  params : {
    id: string;
  }
}

const Addnotes = ({params: {id}}: PageProps) => {
  return (
    <div>Addnotes</div>
  )
}

export default Addnotes