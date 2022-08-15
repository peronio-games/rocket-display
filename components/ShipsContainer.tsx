import styles from "../styles/Ship.module.css";
import { useEffect } from "react";

import { Player } from "./Player";

interface IShipsContainerProps {
  start: boolean;
}

export const ShipsContainer = ({ start }: IShipsContainerProps) => {
  const startAnimation = () => {
    console.info("Animation Started");
  };

  useEffect(() => {
    if (start) {
    }
  }, [start]);

  return (
    <>
      <button>Start</button>
      <div className={styles.shipContainer}>
        <Player />
        <Player />
      </div>
    </>
  );
};
