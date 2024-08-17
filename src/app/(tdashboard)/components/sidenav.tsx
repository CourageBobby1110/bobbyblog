'use client'

import { usePathname } from 'next/navigation';
import styles from './sidenav.module.css'
import Link from 'next/link';
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { useState } from 'react';
import { GoHomeFill } from "react-icons/go";
interface z{
  x: string | undefined;
  detail: any
}
const Sidenav =  ({x,detail}: z) => {

  
  const pathname = usePathname();
  const {user} = useKindeBrowserClient();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false)
  }
  
  
  return (
   <div className={styles.tsc}>
      <div onClick={()=>setIsOpen((prev)=> !prev)}>
     <Image
        alt="hamburger"
        src="/hamburger.svg"
        height={70}
        width={70}
        className={styles.hamburger}
      
      ></Image>
     </div>
     <div className={`${styles.bar } ${isOpen ? styles.tiger : ""}`}>
     <div onClick={closeMenu}>        <Image alt="close" src='/close.svg' height={40} width={40} className={styles.close} ></Image></div>
   
      
      <ul>

      <div ><Image src={user?.picture || ''} alt='profile'  className={styles.image}  width={25} height={25} />Hi, {user?.given_name} 👋</div>
           <Link href={`/dashboard/${x}`} onClick={closeMenu} className= {pathname === `/dashboard/${x}` ? `${styles.active}` : `${styles.empty}`}><MdSpaceDashboard />Dashboard</Link>
      
        <Link href={`/dashboard/notifications/${x}`} onClick={closeMenu} className={pathname === `/dashboard/notifications/${x}` ? `${styles.active}` : `${styles.empty} ` }><IoIosNotifications /> Notifications</Link>
       

      
        
        <Link href={`/dashboard/yourstudents/${x}`} onClick={closeMenu}  className={pathname === `/dashboard/yourstudents/${x}` ? `${styles.active}` : `${styles.empty}` }><PiStudentFill />Your Courses</Link> 
        <Link href={`/`} className={pathname === `/` ? `${styles.active}` : `${styles.empty}` } onClick={closeMenu}><GoHomeFill />Go home</Link> 
        

       
     
      </ul>
    </div>
   </div>
  )
}

export default Sidenav