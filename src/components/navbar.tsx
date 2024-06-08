"use client"


import { Nav } from '@/constants/nav'
import React, { useState } from 'react'
import  {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/navbar.module.css'
import { usePathname } from 'next/navigation';
import Dropdown from './dropdown';





const Navbar = () => {
  const[open, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { isAuthenticated, user, getPermissions} = useKindeBrowserClient();
  const {permissions} = getPermissions();
  return (
    <div className={`${styles.header} px-10 py-2`}>
    <h2> Courage's Blog</h2>


     <ul className={`${styles.ul}`}>
       
    {
       Nav.map( ({id ,path, requiredPermissions, name}) => {
         if (!requiredPermissions|| requiredPermissions.every((p) => permissions?.includes(p)))
         return(
          <li key={id}>
           <Link href={path} className={pathname=== path ? `${styles.active}` : `${styles.empty}`}>{name}</Link>
          </li>)
       })
    }

   

   
    <RegisterLink>Sign up</RegisterLink>

    {!isAuthenticated ?  <LoginLink>Login</LoginLink>:  null}
   <div className='flex gap-1 '>
     {user?.picture && (<div  className={`${styles.prof}`}>        <Image src={user?.picture} alt='profile picture' width={25} height={25} className='rounded-full'>
     
     </Image>  </div>)}
     
      {
      open &&  <Dropdown/>
      }  
     
   
   {isAuthenticated ? <div  className='cursor-pointer'  onMouseOver={() => setIsOpen((prev) => !prev)} >Account</div> : null}
   </div>

   
     
        
 


     </ul>

      



   </div>
  )
}

export default Navbar