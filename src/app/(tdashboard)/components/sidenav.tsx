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
interface z{
  x: string | undefined;
  detail: any
}
const Sidenav =  ({x,detail}: z) => {

  
  const pathname = usePathname();
  const {user} = useKindeBrowserClient();
  
  
  return (
   <div className={styles.tsc}>
     <div className={styles.bar}>
   
      
      <ul>
      <div ><Image src={user?.picture || ''} alt='profile'  className={styles.image}  width={25} height={25} />Hi, {user?.given_name} 👋</div>
           <Link href={`/dashboard/${x}`} className= {pathname === `/dashboard/${x}` ? `${styles.active}` : `${styles.empty}`}><MdSpaceDashboard />Dashboard</Link>
      
        <Link href={`/dashboard/notifications/${x}`} className={pathname === `/dashboard/notifications/${x}` ? `${styles.active}` : `${styles.empty} ` }><IoIosNotifications /> Notifications</Link>
       

       {
        detail?
        <Link href={`/dashboard/yourstudents/${x}`} className={pathname === `/dashboard/yourstudents/${x}` ? `${styles.active}` : `${styles.empty}` }><PiStudentFill />Your students</Link> :
        <Link href={`/dashboard/yourstudents/${x}`} className={pathname === `/dashboard/yourstudents/${x}` ? `${styles.active}` : `${styles.empty}` }><PiStudentFill />Your Tutors</Link>

       } 
     
      </ul>
    </div>
   </div>
  )
}

export default Sidenav