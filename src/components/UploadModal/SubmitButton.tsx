import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export const SubmitButton = (props: { progress: number }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        isLoading={pending}
        type="submit"
        variant={"send"}
        isDisabled={props.progress < 100 && !pending ? true : false}
        _hover={{
          color: "black",
          backgroundColor: "grey",
        }}>
        Subir Pelicula
      </Button>
    </div>
  );
};
