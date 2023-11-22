import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";




const SinglePage = async ({ params }) => {
  const { slug } = params;


  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Blog Post Title</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/logon.png" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mohammed Bouaziz</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
     
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore voluptatum voluptatem ut? 
        </div>
        <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;