"use client";

import { Show, HStack, Avatar, Hide, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SideMenu, IconBell, UploadModal, Logo } from "@/components";
export const Navbar = () => {
  return (
    <>
      <Show below="sm">
        <HStack
          justify={["space-between", "space-evenly"]}
          w={"full"}
          // paddingBottom={"50px"}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition="all 0.5s"
          pb={"150px"}
          key={"navbar"}>
          <SideMenu />
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
          <HStack spacing={12} as={"a"} href="/">
            <Logo />
            <UploadModal />
          </HStack>
          <HStack ml={"auto"} spacing={8}>
            <SideMenu />
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
