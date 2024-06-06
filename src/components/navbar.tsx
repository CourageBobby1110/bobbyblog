"use client"


import { Nav } from '@/constants/nav'
import React from 'react'
import  {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/navbar.module.css'
import { usePathname } from 'next/navigation';



const Navbar = () => {
    const pathname = usePathname();
    const { isAuthenticated, user, getPermissions} = useKindeBrowserClient();
  const {permissions} = getPermissions();
  return (
    <div className={`${styles.header} px-5 py-2`}>
    <h3> Courage's Blog</h3>


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

    {!isAuthenticated ?  <LoginLink>Login</LoginLink>:  <LogoutLink>Log out</LogoutLink>}
   <div className='flex gap-1 '>
     {user?.picture && (<Image src={user?.picture} alt='profile picture' width={25} height={25} className='rounded-full'></Image>)}
   {isAuthenticated ? <Link href="/account">Account</Link> : ""}
   </div>

   
     
        
 


     </ul>

      



   </div>
  )
}

export default Navbar