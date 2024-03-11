"use client";

import { useRef } from "react";

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
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon, BellIcon } from "@chakra-ui/icons";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <IconButton
        aria-label="Menu"
        variant="ghost"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}>
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
              <Button variant="ghost" leftIcon={<AddIcon />}>
                Agregar peliculas
              </Button>
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
        <Button variant="ghost" leftIcon={<AddIcon />}>
          Agregar peliculas
        </Button>
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
