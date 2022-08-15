import { SkyBackground } from "./SkyBackground";

import styles from "../styles/Home.module.css";
import { ShipsContainer } from "./ShipsContainer";

interface ILaunchProps {
  //   animated: boolean;
}

const Container = (props: any) => (
  <div className={styles.container}>{props.children}</div>
);

export const Launch = (props: ILaunchProps) => {
  return (
    <Container>
      <SkyBackground animated={false} />
      <ShipsContainer />
    </Container>
  );
};
