"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";


import { useState } from "react";



const Comments = () => {
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
          />
          <button className={styles.button}>
            Send
          </button>
        </div>
      <div className={styles.comments}>
              <div className={styles.comment}>
                <div className={styles.user}>
                    <Image
                      src="/logon.png"
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  <div className={styles.userInfo}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>10.09.2023</span>
                  </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
      </div>
    </div>
  );
};

export default Comments;