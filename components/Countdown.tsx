import styles from "../styles/Countdown.module.css";

import ReactHowler from "react-howler";
import { useRef, useState } from "react";
import { useEffect } from "react";

interface ICountdownProps {
  start: number;
}

interface IChildrenProps {
  children: any;
}

interface IDigitsProps {
  children: any;
  animate: boolean;
}

const Container = ({ children }: IChildrenProps) => (
  <div className={styles.container}>{children}</div>
);

const Digits = ({ children, animate }: IDigitsProps) => (
  <div className={`${styles.digits} ${animate ? styles.animate : ""}`}>
    {children}
  </div>
);

export const Countdown = ({ start }: ICountdownProps) => {
  const [current, setCurrent] = useState(start);
  const [playing, setPlaying] = useState(false);
  let player: any;

  useEffect(() => {
    let current = start;
    player?.stop();

    const nextDigit = () => {
      setPlaying(true);
      player?.seek(0);

      if (current == 0) {
        setPlaying(false);
        clearInterval(interval);
      }
      setCurrent(--current);
    };

    const interval = setInterval(() => {
      nextDigit();
    }, 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateDigits = () => {
    const res = [];
    for (let i = 1; i <= start; i++) {
      res.push(
        <Digits key={i} animate={current <= i}>
          {i}
        </Digits>
      );
    }
    return res;
  };
  return (
    <>
      <ReactHowler
        ref={(ref) => (player = ref)}
        src='/audio/tick.mp3'
        loop={false}
        preload={true}
        playing={playing}
      />

      <Container>
        <Digits animate={current <= 0}>GO!</Digits>
        {generateDigits()}
      </Container>
    </>
  );
};
