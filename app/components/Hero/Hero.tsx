import React from "react";
import Image from "next/image";
import banner from "../../../public/images/Life.jpg";
import styles from "./hero.module.css";

function Hero() {
  return (
    <section className="heroSection">
      {/* <div className="left"></div>
      <div className="right">
        <div className="contentBox">
          <h1>Seek answers to the puzzles of your life</h1>
        </div>
      </div> */}
      <Image
        alt={""}
        loading="lazy"
        src={banner}
        // width={250}
        // height={500}
        unoptimized={true}
        className={styles.heroImage}
      />
    </section>
  );
}

export default Hero;
