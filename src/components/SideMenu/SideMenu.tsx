"use client";

import {
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
import { IconBell, Logo } from "@/components";
import Link from "next/link";
import { AddIcon } from "@chakra-ui/icons";

export const SideMenu = ({
  isDrawerOpen,
  onDrawerClose,
  handleModalOpen,
}: {
  onDrawerOpen: () => void;
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
  handleModalOpen: () => void;
}) => {
  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
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
              <Button variant={"link"}>Películas</Button>
              <Button variant={"link"}>Agregadas recientemente</Button>
              <Button variant={"link"}>Populares</Button>
              <Button variant={"link"}>Mis películas</Button>
              <Button variant={"link"}>Mi lista</Button>
              <div>
                <Button
                  padding={"0"}
                  variant="ghost"
                  leftIcon={<AddIcon />}
                  onClick={handleModalOpen}
                  _hover={{
                    color: "brand",
                  }}>
                  Agregar películas
                </Button>
              </div>
              <Button variant={"link"}>Cerrar sesión</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
