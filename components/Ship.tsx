import styles from "../styles/Ship.module.css";
import rocketShip from "../public/img/rocket-ship.png";
import Image from "next/image";
import { Fire } from "./Fire";

interface IShipProps {
  shaking: boolean;
  launched: boolean;
  mainSpeed: boolean;
  fire: boolean;
}

export const Ship = ({ shaking, launched, mainSpeed, fire }: IShipProps) => {
  return (
    <div className={`${styles.ship}`}>
      <div className={`${mainSpeed ? styles.mainSpeed : ""}`}>
        <div className={`${launched ? styles.launch : ""}`}>
          <div className={`${shaking ? styles.shaking : ""}`}>
            <Image src={rocketShip} alt='Rocket Ship' />
          </div>
          {fire ? <Fire /> : ""}
        </div>
      </div>
    </div>
  );
};
