import styles from "../../styles/Main.module.css";
import styles2 from "../../styles/Character.module.css";
import { Character } from "../Character";

import { useContractRead } from "wagmi";

import contractABI from "../../abi/RocketGame.json";
import { useState, useEffect } from "react";

const Container = (props: any) => (
  <div className={styles.container}>{props.children}</div>
);

interface IMainScreen {
  start: any;
  contractAddress: string;
}

export const MainScreen = ({ start, contractAddress }: IMainScreen) => {
  const { data, isError, isLoading, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractABI,
    functionName: "lastRound",
    watch: true,
  });

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const num = data?.toNumber() ?? 0;

  return (
    <Container>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.title}>
        <div>PERONIO ROCKET</div>
        <div className={styles.subtitle}>Escaneá el QR para jugar</div>
      </div>

      <div className={styles2.debug}>
        <div>Address : {contractAddress}</div>
        <div>Data : {num}</div>
        {/* <div>{isError ? JSON.stringify(error) : ""}</div> */}
      </div>

      <div className={styles2.players}>
        <Character name='Agustin' />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={start} className={styles.button}>
          EMPEZAR
        </button>
      </div>
    </Container>
  );
};
