import { Ship } from "./Ship";

interface IPlayerProps {
  //   animated: boolean;
}

export const Player = (props: IPlayerProps) => {
  return <Ship animated={false} />;
};
