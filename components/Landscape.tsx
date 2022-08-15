import styles from "../styles/Landscape.module.css";

interface ILandscapeProps {
  animated: boolean;
}

export const Landscape = ({ animated }: ILandscapeProps) => {
  return (
    <>
      <div
        className={styles.sea + " " + (animated ? styles.animatedSea : "")}
      ></div>
      <div
        className={styles.container + " " + (animated ? styles.animated : "")}
      >
        <div className={styles.mountain}>
          <div className={styles.mountains1}></div>
        </div>
      </div>
    </>
  );
};
