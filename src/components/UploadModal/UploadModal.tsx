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
} from "@chakra-ui/react";

import { createMovie } from "@/app/actions";
import { SuccessMessage } from "./SuccesMessage";
import { SubmitButton } from "./SubmitButton";
import { UploadInput } from "./UploadInput";

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
          padding={"40px 40px"}
          color={"white"}
          borderRadius={0}>
          <ModalHeader
            textTransform={"uppercase"}
            color={"brand"}
            textAlign={"center"}
            fontSize={"25px"}>
            Agregar Pelicula
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
                    // isRequired
                  />
                  <SubmitButton progress={progress} />
                </Stack>
              </form>
            ) : (
              <SuccessMessage handleModalClose={handleModalClose} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
