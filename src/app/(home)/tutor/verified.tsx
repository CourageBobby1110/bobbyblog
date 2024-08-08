import Link from "next/link";
import React from "react";
import styles from "../tutor/student_form.module.css";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const TutorVerified =  async () => {
    const {getUser} =  getKindeServerSession();
    const p = await  getUser()

  return (
    <div className={styles.main}>
      <div className={styles.bigbox}>
        <div className={styles.Imagewrapper}>
          <Image src="/poppyflower.svg" alt="poppyflower" fill className={styles.image}></Image>
        </div>
    
        <div className={styles.content}>
          <h1>Congratulations {p?.given_name},</h1>
          <p>
            You have been Verified.
          </p>
          <div className={styles.link}>
            <Link href={`/dashboard/${p?.id}`}>Go to your Dashboard</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TutorVerified;
