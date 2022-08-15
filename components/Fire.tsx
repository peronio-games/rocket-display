import styles from "../styles/Fire.module.css";
// import Image from "next/image";

export const Fire = () => {
  return (
    <>
      <div className={styles.inverted}>
        <div className={styles.container}>
          <div className={`${styles.red} ${styles.flame}`}></div>
          <div className={`${styles.orange} ${styles.flame}`}></div>
          <div className={`${styles.yellow} ${styles.flame}`}></div>
          <div className={`${styles.white} ${styles.flame}`}></div>
          <div className={`${styles.blue} ${styles.circle}`}></div>
          <div className={`${styles.black} ${styles.circle}`}></div>
        </div>
      </div>
    </>
  );
};
