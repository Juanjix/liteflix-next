import {
  Center,
  HStack,
  Icon,
  Stack,
  Progress,
  Button,
  Input,
  Text,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Paperclip } from "lucide-react";
import { ChangeEvent, useRef } from "react";

export const UploadInput = (props: {
  selectedFile: File | null;
  progress: number;
  handleCancelButton: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}) => {
  const { selectedFile, progress, handleCancelButton, onChange, isError } =
    props;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  const inputStyles = {
    padding: "40px",
    border: "1px dashed white",
    color: "white",
    width: "100%",
  };

  return (
    <>
      {!selectedFile && (
        <Center
          style={inputStyles}
          onClick={handleInputClick}
          cursor={"pointer"}>
          <HStack>
            <Icon as={Paperclip}></Icon>
            <Show below="sm">
              <Text whiteSpace={"nowrap"}>Agregá un archivo</Text>
            </Show>
            <Hide below="md">
              <Text>Agregá un archivo o arrastralo y soltalo aquí</Text>
            </Hide>
          </HStack>
        </Center>
      )}
      {selectedFile && !isError && (
        <Stack width={"full"}>
          <Text>
            {progress === 100 ? (
              <>
                <Text as={"b"}>{progress}% Cargado</Text>
              </>
            ) : (
              <>
                Cargando <Text as={"b"}>{progress}%</Text>
              </>
            )}
          </Text>
          <Progress size="md" value={progress} variant={"success"} />

          {progress === 100 ? (
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <Text as={"b"} color={"brand"} fontSize={"16px"}>
                ¡LISTO!
              </Text>
              <Button onClick={handleCancelButton} variant={"link"}>
                Cancelar
              </Button>
            </HStack>
          ) : (
            <Button onClick={handleCancelButton} ml={"auto"} variant={"link"}>
              Cancelar
            </Button>
          )}
        </Stack>
      )}
      {isError && (
        <Stack w={"full"}>
          <Text>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA</Text>
          <Progress size="md" value={100} colorScheme="red" />
          <Button onClick={handleCancelButton} ml={"auto"} variant={"link"}>
            REINTENTAR
          </Button>
        </Stack>
      )}
      <Input
        type="file"
        border={0}
        marginBottom={50}
        marginTop={50}
        textAlign={"center"}
        name="image"
        isRequired
        accept={".jpg,.jpeg,.png"}
        hidden
        ref={fileInputRef}
        draggable={true}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};
