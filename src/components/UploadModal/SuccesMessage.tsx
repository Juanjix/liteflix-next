import { Stack, Button, Text } from "@chakra-ui/react";
import { Logo } from "..";

export const SuccessMessage = (props: {
  handleModalClose: () => void;
  titulo: string;
}) => {
  return (
    <Stack textAlign={"center"} spacing={6}>
      <Stack display={["none", "flex"]} alignItems={"center"} mb={"40px"}>
        <Logo />
      </Stack>
      <Text fontSize={"24px"}>¡Felicitaciones!</Text>
      <Text>{props.titulo} fue correctamente subida</Text>
      <div>
        <Button
          onClick={props.handleModalClose}
          w={"246px"}
          borderRadius={0}
          color={"darkgrey"}>
          Ir a Home
        </Button>
      </div>
    </Stack>
  );
};
