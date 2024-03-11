"use client";

import { useRef, useState } from "react";

import { Logo } from "./Logo";
import {
  Button,
  Avatar,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon, BellIcon } from "@chakra-ui/icons";

const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Button variant="ghost" leftIcon={<AddIcon />} onClick={onOpen}>
        Agregar peliculas
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Pelicula</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!isSuccess ? (
              <Stack>
                <Input type="file" />
                <Input placeholder="Titulo" type="text" />
                <Button colorScheme="blue" mr={3}>
                  Subir Pelicula
                </Button>
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
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <HStack justify={"space-between"}>
              <DrawerCloseButton
                top={"auto"}
                right={"auto"}
                position={"relative"}
              />
              <HStack>
                <IconButton
                  aria-label="Notifications"
                  variant="ghost"
                  icon={<BellIcon />}
                />
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </HStack>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <Stack>
              <Button>Inicio</Button>
              <Button>Series</Button>
              <Button>Peliculas</Button>
              <Button>Agregadas recientemente</Button>
              <Button>Populares</Button>
              <Button>Mis peliculas</Button>
              <Button>Mi lista</Button>
              <ModalButton />
              <Button>Cerrar sesion</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export const Navbar = () => {
  return (
    <HStack w={"full"}>
      <HStack spacing={12}>
        <Logo />
        <ModalButton />
      </HStack>
      <HStack ml={"auto"}>
        <BurgerMenu />
        <IconButton
          aria-label="Notifications"
          variant="ghost"
          icon={<BellIcon />}
        />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </HStack>
    </HStack>
  );
};
