"use client";

import React from "react";
import Image from "next/image";
import styles from "./uploadcard.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

interface uploadProps {
  file: string;
  handleDelete: (file: string) => void;
}
const UploadCard = ({ file, handleDelete }: uploadProps) => {
  return (
    <div className={styles.thumbnail}>
      <div className={styles.imageWrapper}>
        <Image alt="new image" fill src={file} className={styles.image}></Image>
      </div>
      <div onClick={() => handleDelete(file)} className={styles.close}><IoIosCloseCircle /></div>
    </div>
  );
};

export default UploadCard;