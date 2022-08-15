import { SkyBackground } from "./SkyBackground";

import styles from "../styles/Home.module.css";
import { ShipsContainer } from "./ShipsContainer";
import { useState } from "react";
import { useEffect } from "react";
import { Countdown } from "./Countdown";
import ReactHowler from "react-howler";
import { Landscape } from "./Landscape";

interface ILaunchProps {
  //   animated: boolean;
}

const Container = (props: any) => (
  <div className={styles.container}>{props.children}</div>
);

const COUNTDOWN_DELAY = 1000;
const LAUNCH_DELAY = 1000;
const BACKGROUND_DELAY = 1200;

const COUNTER = 5;

export const Launch = (props: ILaunchProps) => {
  const [startShip, setStartShip] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [startBackground, setStartBackground] = useState(false);

  const startLaunch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setStartShip(true);
        resolve(null);
      }, LAUNCH_DELAY);
    });
  };

  const activateBackground = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setStartBackground(true);
        resolve(null);
      }, BACKGROUND_DELAY);
    });
  };

  const startCountdown = () => {
    return new Promise((resolve) => {
      setCountdown(true);
      setTimeout(() => {
        resolve(null);
      }, COUNTER * 1000);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      startCountdown()
        .then(() => {
          return startLaunch();
        })
        .then(() => {
          return activateBackground();
        });
    }, COUNTDOWN_DELAY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {countdown ? <Countdown start={COUNTER} /> : ""}
      <ReactHowler
        src='/audio/radio.mp3'
        playing={true}
        loop={false}
        preload={true}
      />
      {startShip ? (
        <ReactHowler
          src='/audio/activate.mp3'
          playing={true}
          loop={false}
          preload={true}
        />
      ) : (
        ""
      )}
      <SkyBackground animated={startBackground} />
      <Landscape animated={startShip} />
      <ShipsContainer start={startShip} />
    </Container>
  );
};
