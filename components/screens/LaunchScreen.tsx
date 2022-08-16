import { Launch } from "../Launch";

const Container = (props: any) => <div>{props.children}</div>;

export const LaunchScreen = () => {
  return (
    <Container>
      <Launch />
    </Container>
  );
};
