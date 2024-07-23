"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image';
import { Nav } from './constant'
import styles from '@/app/(admin)/adminstyles/sidebar.module.css'

const Sidebar = () => {

  const pathname = usePathname();
  return (

    <div className={styles.parent}>
      <div className={styles.sidenav}>
        {/* <Link href='/dashboard'>Dashboard</Link>
        <Link href='/students'>Student</Link>
        <Link href='/Orders'>Orders</Link>
        <Link href='/customers'>Customers</Link>
        <Link href='/Revenue'>Revenue</Link> */}
       <div className={styles.links}>
       {
          Nav.map((item, index) => (
            <Link key={index} href={item.path}   className={pathname=== item.path? `${styles.active}` : `${styles.empty}`}       >
           <Image src={item.icon || ""} alt='' width={20} height={20}></Image>  <p>{item.name}</p>
            </Link>
          ))
        }
       </div>
        
        


    </div>

    </div>
    
  )
}

export default Sidebar