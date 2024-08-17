import Link from "next/link";
import React from "react";
import styles from "../tutor/student_form.module.css";
import Image from "next/image";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Tutordashboard =  async () => {
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
            Your account has been created successfully. we will review and notify you if you have been Approved
          </p>
          <div className={styles.link}>
            <Link href="/" className={styles.a}    >Go back Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tutordashboard;
