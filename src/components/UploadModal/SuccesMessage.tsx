import { Stack, Button, Text } from "@chakra-ui/react";

export const SuccessMessage = (props: { handleModalClose: () => void }) => {
  return (
    <Stack textAlign={"center"} spacing={9}>
      <Text fontSize={"24px"}>¡Felicitaciones!</Text>
      <Text>Litebox the movie fue correctamente subida</Text>
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
