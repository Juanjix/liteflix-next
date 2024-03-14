import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";

export const SideBarSkeleton = () => {
  return (
    <>
      <Stack maxW={"200px"} spacing={4}>
        <Box>
          <Menu>
            <MenuButton as={Button} variant={"ghost"}>
              Ver:
            </MenuButton>
            <MenuList>
              <MenuItem>Populares</MenuItem>
              <MenuItem>Mis Peliculas</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </>
  );
};
