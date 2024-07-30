'use client'
import React, { useEffect, useState } from 'react'
import { atlas } from '@/lib/getp'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'



const Search =   ({placeholder}: {placeholder: string}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  const router = useRouter();
  const [state, setState] = useState('')

    
 
 async  function handleSearch (term: string,){
    
    const params = new URLSearchParams(searchParams);
    if(term){
      params.set('query', term);
    }else{
      params.delete('query');
      router.refresh();
    }
    replace(`${pathname}?${params.toString()}`);
  
  }
  

    // const[search, setSearchTerm] = useState([])
    // useEffect(()=>{
    //   const  getdata = async() =>{
        
    //       const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/getproduct`, );
    //      const data = await res.json();
    //      setSearchTerm(data)
    //      console.log(search)
      

      
    //   }
    //   getdata(); 
      
     
    // }, [])



  return (
    <div>

      <input type="text" placeholder={placeholder} onChange={(e) => {setState(e.target.value), handleSearch(e.target.value)}} defaultValue={searchParams.get('query')?.toString()} className='bg-slate-500'/>
      <button onClick={()=> handleSearch(state)} >search</button>
    </div>
  
  )
}

export default Search