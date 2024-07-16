'use client'


import Link from "next/link"
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import styles from './navbar.module.css'



const Dropdown = () => {
    const {user} = useKindeBrowserClient()
  return (
      <div className={`flex flex-col ${styles.main} z-1000 ${styles.responsive}` }>
        <ul className=" flex flex-col gap-4   ">
            <li> Hi {user?.given_name} 👋🏾</li>
            <li><><Link href='/profile'>Profile</Link></></li>
           
            <li><LogoutLink> Log out</LogoutLink></li>
            
        </ul>
      </div>
  )
}

export default Dropdown