import { Button } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export const SubmitButton = (props: { progress: number }) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button
        isLoading={pending}
        type="submit"
        variant={"sendData"}
        isDisabled={props.progress < 100 && !pending ? true : false}>
        Subir Pelicula
      </Button>
    </div>
  );
};
