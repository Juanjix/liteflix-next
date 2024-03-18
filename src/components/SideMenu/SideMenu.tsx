"use client";

import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  HStack,
  DrawerCloseButton,
  Avatar,
  DrawerBody,
  Stack,
  Button,
  Show,
} from "@chakra-ui/react";
import { IconMenu, IconBell, UploadModal, Logo } from "@/components";
import Link from "next/link";

export const SideMenu = () => {
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
          <DrawerHeader px={["30px", "60px"]} py={["36px", "60px"]}>
            <Show above="md">
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
            </Show>
            <Show below="sm">
              <HStack
                justify={["space-between", "space-evenly"]}
                w={"full"}
                key={"navbar"}>
                <DrawerCloseButton
                  top={"auto"}
                  right={"auto"}
                  position={"relative"}
                  color={"white"}
                  width={"auto"}
                />
                <Link href="/">
                  <Logo />
                </Link>

                <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
              </HStack>
            </Show>
          </DrawerHeader>
          <DrawerBody px={["30px", "60px"]} py={"50"}>
            <Stack spacing={8}>
              <Button variant={"link"}>Inicio</Button>
              <Button variant={"link"}>Series</Button>
              <Button variant={"link"}>Peliculas</Button>
              <Button variant={"link"}>Agregadas recientemente</Button>
              <Button variant={"link"}>Populares</Button>
              <Button variant={"link"}>Mis peliculas</Button>
              <Button variant={"link"}>Mi lista</Button>
              <div>
                <UploadModal />
              </div>
              <Button variant={"link"}>Cerrar sesion</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
