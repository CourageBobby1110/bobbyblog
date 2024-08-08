"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "./constant";
import styles from "@/app/(admin)/adminstyles/sidebar.module.css";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.parent}>
     <div onClick={()=>setIsOpen((prev)=> !prev)}>
     <Image
        alt="hamburger"
        src="hamburger.svg"
        height={70}
        width={70}
        className={styles.hamburger}
      
      ></Image>
     </div>
      <div className={`${styles.sidenav } ${isOpen ? styles.puma : ""}`}>
<div onClick={closeMenu}>        <Image alt="close" src='close.svg' height={40} width={40} className={styles.close} ></Image></div>
        <div className={styles.links} >
          {Nav.map((item, index) => (
            <div
              key={index}
              className={
                pathname === item.path ? `${styles.active}` : `${styles.empty}`
              }
            >
              {item.icon}
              <Link href={item.path} onClick={closeMenu}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
