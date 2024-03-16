"use client";

import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useFormState } from "react-dom";
import { motion } from "framer-motion";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Avatar,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
  Show,
  Hide,
  Center,
  Icon,
  Progress,
} from "@chakra-ui/react";

import { IconBell, IconMenu, Logo } from "@/components";
import { createMovie } from "@/app/actions";
import { Paperclip } from "lucide-react";

const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);
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
    }
  }, [createMovieState]);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleCancelButton = () => {
    setSelectedFile(null);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setProgress(0);
  };

  const handleModalClose = () => {
    onClose();
    setIsSuccess(false);
    setSelectedFile(null);
  };

  const inputStyles = {
    padding: "40px",
    border: "1px dashed white",
    color: "white",
    width: "100%",
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

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent
          bg={"darkgrey"}
          padding={"40px 40px"}
          color={"white"}
          borderRadius={0}>
          <ModalHeader
            textTransform={"uppercase"}
            color={"brand"}
            textAlign={"center"}
            letterSpacing={"4px"}
            fontSize={"25px"}>
            Agregar Pelicula
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!isSuccess ? (
              <form action={createMovieAction}>
                <Stack alignItems={"center"}>
                  {!selectedFile && (
                    <Center
                      style={inputStyles}
                      onClick={handleInputClick}
                      cursor={"pointer"}>
                      <HStack>
                        <Icon as={Paperclip}></Icon>
                        <Text>
                          Agregá un archivo o arrastralo y soltalo aquí
                        </Text>
                      </HStack>
                    </Center>
                  )}
                  {selectedFile && (
                    <Stack w={"full"}>
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
                      <Progress size="md" value={progress} />

                      {progress === 100 ? (
                        <>
                          <Text
                            as={"b"}
                            color={"brand"}
                            ml={"auto"}
                            fontSize={"16px"}
                            letterSpacing={"4px"}>
                            ¡LISTO!
                          </Text>
                        </>
                      ) : (
                        <Button
                          onClick={handleCancelButton}
                          ml={"auto"}
                          variant={"link"}>
                          Cancelar
                        </Button>
                      )}
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
                    onChange={(e) => handleFileChange(e)}
                  />
                  <Input
                    placeholder="TITULO"
                    _placeholder={{
                      color: "white",
                      fontSize: "16px",
                      letterSpacing: "4px",
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
                    isRequired
                  />
                  <div>
                    <Button
                      type="submit"
                      variant={"sendData"}
                      isDisabled={progress < 100 ? true : false}>
                      Subir Pelicula
                    </Button>
                  </div>
                </Stack>
              </form>
            ) : (
              <Stack textAlign={"center"} spacing={9}>
                <Text fontSize={"24px"}>¡Felicitaciones!</Text>
                <Text>Litebox the movie fue correctamente subida</Text>
                <div>
                  <Button
                    onClick={handleModalClose}
                    w={"246px"}
                    borderRadius={0}
                    color={"darkgrey"}>
                    Ir a Home
                  </Button>
                </div>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Menu"
        variant="ghost"
        icon={<IconMenu />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={["full", "lg"]}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={"darkgrey"}>
          <DrawerHeader px={["30px", "60px"]} py={["30px", "30px"]}>
            <HStack justify={"space-between"}>
              <DrawerCloseButton
                top={"auto"}
                right={"auto"}
                position={"relative"}
                color={"white"}
                width={"auto"}
              />
              <HStack spacing={9}>
                <IconButton
                  aria-label="Notifications"
                  variant="ghost"
                  icon={<IconBell />}
                />
                <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
              </HStack>
            </HStack>
          </DrawerHeader>
          <DrawerBody px={["30px", "60px"]}>
            <Stack spacing={8}>
              <Button variant={"link"}>Inicio</Button>
              <Button variant={"link"}>Series</Button>
              <Button variant={"link"}>Peliculas</Button>
              <Button variant={"link"}>Agregadas recientemente</Button>
              <Button variant={"link"}>Populares</Button>
              <Button variant={"link"}>Mis peliculas</Button>
              <Button variant={"link"}>Mi lista</Button>
              <div>
                <ModalButton />
              </div>
              <Button variant={"link"}>Cerrar sesion</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Navbar = () => {
  return (
    <>
      <Show below="sm">
        <HStack
          justify={["space-between", "space-evenly"]}
          w={"full"}
          paddingBottom={"50px"}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition="all 0.5s"
          paddingTop={"25px"}>
          <BurgerMenu />
          <Logo />
          <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
        </HStack>
      </Show>

      <Hide below="md">
        <HStack
          w={"full"}
          paddingBottom={"30px"}
          paddingTop={"20px"}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition="all 0.5s">
          <HStack spacing={12}>
            <Logo />
            <ModalButton />
          </HStack>
          <HStack ml={"auto"} spacing={8}>
            <BurgerMenu />
            <IconButton
              aria-label="Notifications"
              variant="ghost"
              icon={<IconBell />}
            />
            <Avatar
              name="Dan Abrahmov"
              src="/images/avatar.png"
              cursor={"pointer"}
            />
          </HStack>
        </HStack>
      </Hide>
    </>
  );
};
