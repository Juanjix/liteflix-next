"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Hide,
  Heading,
  Avatar,
  HStack,
  Show,
  IconButton,
} from "@chakra-ui/react";

import { createMovie } from "@/app/actions";
import { SuccessMessage } from "./SuccesMessage";
import { SubmitButton } from "./SubmitButton";
import { UploadInput } from "./UploadInput";
import { Logo, IconMenu } from "@/components";

export const UploadModal = ({
  isModalOpen,
  onModalClose,
  handleDrawerOpen,
}: {
  isModalOpen: boolean;
  onModalClose: () => void;
  handleDrawerOpen: () => void;
}) => {
  const { pending } = useFormStatus();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createMovieState, createMovieAction] = useFormState(createMovie, {
    error: null,
    success: false,
  });
  const [titulo, setTitulo] = useState<string>("");

  const handleTituloChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  useEffect(() => {
    if (createMovieState.success) {
      setIsSuccess(true);
      setProgress(0);
    }
    if (createMovieState.error) {
      setIsError(true);
    }
  }, [createMovieState, pending]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      simulateProgress();
    }
    setSelectedFile(file || null);
  };

  const simulateProgress = () => {
    const id = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => Math.min(prevProgress + 20, 100));
      } else {
        clearInterval(id);
      }
    }, 1000);
    setIntervalId(id);
  };

  const handleCancelButton = () => {
    setSelectedFile(null);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setProgress(0);
    setIsError(false);
    setTitulo("");
  };

  const handleModalClose = () => {
    onModalClose();
    handleCancelButton();
    setIsSuccess(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        size={["full", "3xl"]}
        isCentered>
        <ModalOverlay />
        <ModalContent
          justifyContent={"center"}
          bg={"darkgrey"}
          padding={["20px", "40px"]}
          color={"white"}
          borderRadius={0}>
          <Hide below="md">
            <ModalCloseButton />
          </Hide>
          <ModalHeader pr={0} pl={0}>
            <Show below="sm">
              <HStack
                justify={["space-between", "space-evenly"]}
                w={"full"}
                key={"navbar"}>
                <IconButton
                  aria-label="Menu"
                  variant="ghost"
                  icon={<IconMenu />}
                  onClick={handleDrawerOpen}
                />
                <Stack as={"a"} href="/">
                  <Logo />
                </Stack>
                <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
              </HStack>
            </Show>
          </ModalHeader>
          <ModalBody
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            w={"full"}>
            <Stack
              spacing={20}
              alignItems={"center"}
              justifyContent={"center"}
              w={"full"}>
              <Heading
                textTransform={"uppercase"}
                color={"brand"}
                textAlign={"center"}
                display={isSuccess ? "none" : "block"}
                fontSize={"25px"}>
                Agregar Película
              </Heading>

              {!isSuccess ? (
                <form action={createMovieAction} style={{ width: "100%" }}>
                  <Stack alignItems={"center"}>
                    <UploadInput
                      selectedFile={selectedFile}
                      progress={progress}
                      handleCancelButton={handleCancelButton}
                      onChange={(e) => handleFileChange(e)}
                      isError={isError}
                    />
                    <Input
                      placeholder="TITULO"
                      _placeholder={{
                        color: "white",
                        fontSize: "16px",
                      }}
                      onChange={handleTituloChange}
                      value={titulo}
                      type="text"
                      name="title"
                      border={0}
                      borderBottom={"1px solid white"}
                      borderRadius={0}
                      marginBottom={50}
                      marginTop={50}
                      textAlign={"center"}
                      maxW={"248"}
                      color={"white"}
                      letterSpacing={"4px"}
                    />
                    <SubmitButton progress={progress} />
                    <Hide above="md">
                      <Button
                        onClick={handleModalClose}
                        variant={"secondary"}
                        mt={3}>
                        Salir
                      </Button>
                    </Hide>
                  </Stack>
                </form>
              ) : (
                <SuccessMessage
                  handleModalClose={handleModalClose}
                  titulo={titulo}
                />
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
