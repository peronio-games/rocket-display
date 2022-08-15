import styles from "../styles/SkyBackground.module.css";

interface ISkyBackgroundProps {
  animated: boolean;
}

export const SkyBackground = ({ animated }: ISkyBackgroundProps) => {
  return (
    <div className={`${styles.stage} ${animated ? styles.animatedSky : ""}`}>
      <div
        className={`${styles.stars} ${animated ? styles.animatedStars : ""}`}
      ></div>
      <div
        className={`${styles.stars2} ${animated ? styles.animatedStars2 : ""}`}
      ></div>
    </div>
  );
};
