import styles from "../styles/Fire.module.css";

import ReactHowler from "react-howler";

interface IFireProps {
  space: boolean;
}

export const Fire = ({ space }: IFireProps) => {
  console.info("space", space);

  return (
    <>
      <ReactHowler
        src='/audio/thrusters1.mp3'
        playing={!space}
        loop={true}
        preload={true}
      />
      <ReactHowler
        src='/audio/thrusters2.mp3'
        playing={space}
        loop={true}
        preload={true}
      />

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
