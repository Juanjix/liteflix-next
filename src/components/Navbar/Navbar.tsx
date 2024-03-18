"use client";

import {
  Show,
  HStack,
  Avatar,
  Hide,
  IconButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SideMenu, IconBell, UploadModal, Logo, IconMenu } from "@/components";
import { AddIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const handleModalOpen = () => {
    onModalOpen();
    onDrawerClose();
  };

  const handleDrawerOpen = () => {
    onModalClose();
    onDrawerOpen();
  };

  return (
    <>
      <Show below="sm">
        <HStack
          justify={["space-between", "space-evenly"]}
          w={"full"}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition="all 0.5s"
          pb={"150px"}
          key={"navbar"}>
          <IconButton
            aria-label="Menu"
            variant="ghost"
            icon={<IconMenu />}
            onClick={handleDrawerOpen}
          />
          <Logo />
          <Avatar name="Dan Abrahmov" src="/images/avatar.png" />
        </HStack>
      </Show>

      <Hide below="sm">
        <HStack
          w={"full"}
          paddingBottom={"30px"}
          paddingTop={"20px"}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition="all 0.5s"
          key={"navbarDesktop"}>
          <HStack spacing={12}>
            <Logo />
            <Button
              padding={"0"}
              variant="ghost"
              leftIcon={<AddIcon />}
              onClick={handleModalOpen}
              _hover={{
                color: "brand",
              }}>
              Agregar peliculas
            </Button>
          </HStack>
          <HStack ml={"auto"} spacing={8}>
            <IconButton
              aria-label="Menu"
              variant="ghost"
              icon={<IconMenu />}
              onClick={handleDrawerOpen}
            />

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
      <UploadModal
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <SideMenu
        onDrawerClose={onDrawerClose}
        isDrawerOpen={isDrawerOpen}
        onDrawerOpen={onDrawerOpen}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
};
