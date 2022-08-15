import styles from "../styles/Ship.module.css";
import rocketShip from "../public/img/rocket-ship.png";
import Image from "next/image";

interface IShipProps {
  animated: boolean;
}

export const Ship = ({ animated }: IShipProps) => {
  return (
    <div className={`${styles.ship} ${animated ? styles.shaking : ""}`}>
      <Image src={rocketShip} alt='Rocket Ship' />
    </div>
  );
};
