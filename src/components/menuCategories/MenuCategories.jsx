import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Math
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Python
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Mahcine Learning
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Data Science
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Math
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Interview Preparation
      </Link>
    </div>
  );
};

export default MenuCategories;