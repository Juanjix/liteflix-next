"use client";

import { Logo } from "./Logo";
import { Button, Avatar, HStack, IconButton } from "@chakra-ui/react";
import { AddIcon, HamburgerIcon, BellIcon } from "@chakra-ui/icons";

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
        <IconButton
          aria-label="Menu"
          variant="ghost"
          icon={<HamburgerIcon />}
        />
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
