"use client";

import { useState } from "react";
import { Logo } from "./Logo";

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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IconBell, IconMenu } from "@/components";

const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  const inputStyles = {
    padding: "40px",
    border: "1px dashed white",
    color: "white",
    _placeholder: {
      textAlign: "center",
    },
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

      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent bg={"darkgrey"} padding={"40px 40px"}>
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
              <Stack alignItems={"center"}>
                <Input
                  type="file"
                  border={0}
                  marginBottom={50}
                  marginTop={50}
                  textAlign={"center"}
                  style={inputStyles}
                />
                <Input
                  placeholder="TITULO"
                  _placeholder={{
                    color: "white",
                    fontSize: "16px",
                    letterSpacing: "4px",
                  }}
                  type="text"
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
                <div>
                  <Button isDisabled variant={"sendData"}>
                    Subir Pelicula
                  </Button>
                </div>
              </Stack>
            ) : (
              <Stack>
                <Text>Felicitaciones</Text>
                <Text>Litebox the movie fue correctamente subida</Text>
                <Button onClick={onClose}>Ir a Home</Button>
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
          justify={"space-evenly"}
          w={"full"}
          paddingBottom={"50px"}
          paddingTop={"25px"}>
          <BurgerMenu />
          <Logo />
          <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
        </HStack>
      </Show>

      <Hide below="md">
        <HStack w={"full"} paddingBottom={"30px"} paddingTop={"20px"}>
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
            <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
          </HStack>
        </HStack>
      </Hide>
    </>
  );
};
