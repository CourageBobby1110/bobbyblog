import React from 'react'
import TutorForm from '../tformfield';
interface PageProps {
    params: {
      id: string;
    }
  
}

const TutorAdmin = ({params: {id}}: PageProps) => {
  return (
  <div><TutorForm id={id}  /></div>
  )
}

export default TutorAdmin