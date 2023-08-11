import React from "react";
import Image from "next/image";
import banner from "../../../public/images/Life.jpg";
import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.contentBox}>
          <span>Seek answers to the puzzles of your life</span>
          <h1 className={styles.title}>
            Tell me and I forget. Teach me and I remember. Involve me and I
            learn.
          </h1>
        </div>
      </div>
      {/* <Image
        alt={""}
        loading="lazy"
        src={banner}
        // width={250}
        // height={500}
        unoptimized={true}
        className={styles.heroImage}
      /> */}
    </section>
  );
}

export default Hero;
