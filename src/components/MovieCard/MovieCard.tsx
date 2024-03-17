"use client";

import { Box, HStack, IconButton, Stack, Text, Icon } from "@chakra-ui/react";
import { Play, PlayCircleIcon } from "lucide-react";

import { IconStar } from "..";
import { useState } from "react";
import { motion } from "framer-motion";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  ranking?: number;
  year?: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const { imageUrl, title, ranking, year } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box
        as={motion.div}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition="all 0.7s"
        backgroundImage={imageUrl}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"top center"}
        width={["327px", "300px", "240px"]}
        height={["172px", "172px", "146px"]}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Stack
          _hover={{
            background: "rgba(36, 36, 36, 0.7)",
          }}
          transition="all 0.7s"
          justifyContent={isHovered ? "flex-end" : "space-evenly"}
          alignItems={isHovered ? "flex-start" : "center"}
          h={"full"}
          p={isHovered ? "10px 20px" : "none"}
          background={
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)"
          }>
          {isHovered ? (
            <>
              <Box>
                <HStack>
                  <Icon
                    as={PlayCircleIcon}
                    width={"24px"}
                    height={"24px"}
                    color={"white"}
                    _hover={{
                      color: "black",
                      fill: "brand",
                    }}
                  />
                  <Text
                    color={"white"}
                    textTransform={"uppercase"}
                    lineHeight={"16px"}
                    textAlign={"left"}
                    display={"flex"}
                    alignItems={"center"}
                    fontWeight={400}>
                    {title}
                  </Text>
                </HStack>
              </Box>
              <HStack
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"100%"}
                mt={"10px"}>
                <HStack>
                  <IconStar />
                  <Text
                    color={"white"}
                    fontSize={"14px"}
                    letterSpacing={"2px"}
                    display={"flex"}
                    alignItems={"center"}
                    mr={"20px"}>
                    {ranking}
                  </Text>
                </HStack>

                <Text color={"white"} fontSize={"14px"} letterSpacing={"2px"}>
                  {year}
                </Text>
              </HStack>
            </>
          ) : (
            <>
              <Box
                mt={"30px"}
                display={isHovered ? "none" : "block"}
                transition="all 1s">
                <IconButton
                  aria-label="Notifications"
                  icon={<Play />}
                  rounded={"full"}
                  border={"2px"}
                  colorScheme="blackAlpha"
                  justifyContent={"center"}
                />
              </Box>
              <Text
                color={"white"}
                textTransform={"uppercase"}
                lineHeight={"16px"}
                textAlign={"center"}
                fontWeight={400}>
                {title}
              </Text>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};
