import { SkyBackground } from "./SkyBackground";

import styles from "../styles/Home.module.css";
import { ShipsContainer } from "./ShipsContainer";
import { useState } from "react";
import { useEffect } from "react";

interface ILaunchProps {
  //   animated: boolean;
}

const Container = (props: any) => (
  <div className={styles.container}>{props.children}</div>
);

export const Launch = (props: ILaunchProps) => {
  const [startShip, setStartShip] = useState(false);
  const [startBackground, setStartBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartShip(true);
    }, 1000);

    setTimeout(() => {
      setStartBackground(true);
    }, 2200);
  }, []);
  return (
    <Container>
      <SkyBackground animated={startBackground} />
      <ShipsContainer start={startShip} />
    </Container>
  );
};
