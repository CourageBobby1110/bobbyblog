import React from 'react'
import TutorForm from '../tutorformfield';
interface PageProps{
  params : {
    id: string;
  }
}

const Tutor = ({params: {id}}: PageProps) => {
  return (
    <div>
      <TutorForm  id ={id}/>
    </div>
   
  )
}

export default Tutor