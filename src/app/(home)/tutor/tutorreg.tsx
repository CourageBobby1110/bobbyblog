import Image from "next/image"
import Link from "next/link"
import styles from "../tutor/student_form.module.css";
interface z {
    x: string | undefined;
  
}
const TutorReg = ({x}:z ) => {
  return (
    <div>
          <div className={styles.main}>
      <div className={styles.bigbox}>
        <div className={styles.Imagewrapper}>
          <Image src="/poppyflower.svg" alt="poppyflower" fill className={styles.image}></Image>
        </div>

        <div className={styles.content}>
          <h1>You Have to register as a Tutor</h1>
          <p>
            To become a tutor at Ravens Academy, you must register. Please fill out the form below to get started.
  
          </p>
          <div className={styles.link}>
            <Link href={`/tutor/${x}`}>Register Here</Link>
          </div>
        </div>

      </div>
    </div>





    </div>
  )
}

export default TutorReg