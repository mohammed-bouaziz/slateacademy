import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.python}`}>
          <Image src="/style.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Python
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.software}`}>
          <Image src="/coding.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Software
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.ml}`}>
          <Image src="/culture.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Machine Learning
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.ds}`}>
          <Image src="/fashion.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Data Science
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.math}`}>
          <Image src="/food.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Math
        </Link>
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.ip}`}>
          <Image src="/travel.png" 
                  alt=''
                  width={32}
                  height={32}
                  className={styles.image} />
          Interview Prep
        </Link>
      </div>
    </div>
  )
}

export default CategoryList