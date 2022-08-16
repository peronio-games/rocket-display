import styles from "../styles/Character.module.css";
import astronaut from "../public/img/astronaut.png";
import Image from "next/image";

interface ICharacterProps {
  //   shaking: boolean;
  name: string;
}

export const Character = ({ name }: ICharacterProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.character}`}>
        <Image src={astronaut} alt='Astronaut' />
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  );
};
