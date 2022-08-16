import styles from "../../styles/Main.module.css";
import styles2 from "../../styles/Character.module.css";
import { Character } from "../Character";

const Container = (props: any) => (
  <div className={styles.container}>{props.children}</div>
);

interface IMainScreen {
  start: any;
}

export const MainScreen = ({ start }: IMainScreen) => {
  return (
    <Container>
      <div className={styles.stars}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.title}>
        <div>PERONIO ROCKET</div>
        <div className={styles.subtitle}>Escaneá el QR para jugar</div>
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
