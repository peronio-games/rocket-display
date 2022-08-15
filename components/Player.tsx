import { useState, useEffect } from "react";
import { Ship } from "./Ship";

interface IPlayerProps {
  start: boolean;
}

export const Player = ({ start }: IPlayerProps) => {
  const [shaking, setShaking] = useState(false);
  const [fire, setFire] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [mainSpeed, setMainSpeed] = useState(false);
  const [space, setSpace] = useState(false);

  const initLaunch = () => {
    console.info("Init Launch!!");
    setLaunched(true);
    setFire(true);
    setTimeout(() => {
      setShaking(true);
      setMainSpeed(true);
    }, 800);

    setTimeout(() => {
      setShaking(false);
      setSpace(true);
    }, 15500);
  };

  useEffect(() => {
    console.info("Start", start);
    if (start) {
      console.info("Start Ship!!");
      initLaunch();
    }
  }, [start]);
  return (
    <Ship
      shaking={shaking}
      launched={launched}
      mainSpeed={mainSpeed}
      fire={fire}
      space={space}
    />
  );
};
