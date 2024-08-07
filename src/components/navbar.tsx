"use client"


import { Nav } from '@/constants/nav'
import React, { useRef, useState } from 'react'
import  {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/components/navbar.module.css'
import { usePathname } from 'next/navigation';
import Dropdown from './dropdown';
import { Menu, ChevronDown } from 'lucide-react';
import { education } from '@/constants/education';





interface HamburgerMenuProps {
  onToggle: (isOpen: boolean) => void;
}
interface z{
  x: string;
}


const Navbar = () => {

  const useNav = useRef()
  const[open, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const [rotate, setRotate] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const closeMenu = () => {
    setIsActive(false)
  }

 
    
  
    const handleClick = () => {
     setIsOpen(!open)
     setRotate(!rotate)
     
    };
  
 
 
  
    const pathname = usePathname();
    const { isAuthenticated, user, getPermissions} = useKindeBrowserClient();
  const {permissions} = getPermissions();
  return (

       <div className={styles.header}>
       <div> <h1>  Ravens Academy</h1></div>
  
    <div className={styles.top}>
      <Menu className={styles.menu} onClick={() => setIsActive((prev) => !prev)}/>
    </div>
    <ul className={`${styles.ul}  ${ isActive ? styles.jaguar :''}`}>
    {
       Nav.map( ({id ,path, requiredPermissions, name}) => {
         if (!requiredPermissions|| requiredPermissions.every((p) => permissions?.includes(p)))
         return(
          <li key={id} onClick={closeMenu}>
           <Link href={path} className={pathname=== path ? `${styles.active}` : `${styles.empty}` }>{name}</Link>
          </li>)
       })
    }
    <Link href='#' className= {styles.educationLink} onMouseEnter={()=>setShowEducation(true)} onMouseLeave={()=> setShowEducation(false)}>Education</Link>

     {
      <div><Link href={`${`/dashboard/${user?.id}`}`}>Dashboard</Link></div>
     }




      {
        showEducation && <div className={styles.education} onMouseEnter={() => setShowEducation(true)} onMouseLeave={() => setShowEducation(false)}>
          <div className={styles.linkdiv}   >
          {
          education.map((z) => (
            <Link   key={z.title}  href={z.path} className={styles.edulinks} onClick={()=>setShowEducation(false)}>
              <div className={styles.icondiv}>
              {z.icon}
              </div>
            
              <p>{z.title}</p>
            </Link>
          ))
        }

          </div>
      
      </div>
      }
   

   
    <RegisterLink>Sign up</RegisterLink>

    {!isAuthenticated ?  <LoginLink>Login</LoginLink>:  null}
   <div className='flex gap-1 '>
    
     
       
     
   
   {isAuthenticated ? <div   className={`${styles.dropdown} cursor-pointer`}  onClick={handleClick}><p> {user?.picture && (<div  className={`${styles.prof}`}>        <Image src={user?.picture} alt='profile picture' width={25} height={25} className='rounded-full'>
     
     </Image>  </div>)}Account  <div className={rotate ?`${styles.rotate}` : ""}><ChevronDown  className={styles.drop}  /></div></p> {
      open &&  <div><Dropdown/></div> 

      }    </div> : <p>ACCOUNT</p>}
   </div>
      
    </ul>




      



   </div>

  
   
  )
}

export default Navbar