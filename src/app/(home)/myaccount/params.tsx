"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

const Params = ({id, params}: any) => {
    const searchParams = useSearchParams();
    console.log(searchParams.get('id'))
  return (
    <div>Params</div>
  )
}

export default Params