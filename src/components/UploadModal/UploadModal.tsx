"use client";

import { useState, ChangeEvent, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  useDisclosure,
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
} from "@chakra-ui/react";

import { createMovie } from "@/app/actions";
import { SuccessMessage } from "./SuccesMessage";
import { SubmitButton } from "./SubmitButton";
import { UploadInput } from "./UploadInput";
import { SideMenu, Logo } from "..";

export const UploadModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  };

  const handleModalClose = () => {
    onClose();
    handleCancelButton();
    setIsSuccess(false);
  };

  return (
    <>
      <Button
        padding={"0"}
        variant="ghost"
        leftIcon={<AddIcon />}
        onClick={onOpen}>
        Agregar peliculas
      </Button>

      <Modal
        isOpen={isOpen}
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
                <SideMenu />
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
            <Stack spacing={20} alignItems={"center"} justifyContent={"center"}>
              <Heading
                textTransform={"uppercase"}
                color={"brand"}
                textAlign={"center"}
                display={isSuccess ? "none" : "block"}
                fontSize={"25px"}>
                Agregar Pelicula
              </Heading>

              {!isSuccess ? (
                <form action={createMovieAction}>
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
                      <Button onClick={onClose} variant={"secondary"} mt={3}>
                        Salir
                      </Button>
                    </Hide>
                  </Stack>
                </form>
              ) : (
                <SuccessMessage handleModalClose={handleModalClose} />
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
