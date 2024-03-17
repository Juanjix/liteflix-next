"use client";

import { HeroProps } from "@/types";
import { Text, Heading, Button, Stack } from "@chakra-ui/react";
import { Play, Plus } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = (props: HeroProps) => {
  const { title, isOriginal, link } = props;

  return (
    <Stack
      spacing={5}
      w={"full"}
      paddingBottom={[20, 50]}
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition="all 0.5s"
      key={"hero"}>
      <Stack>
        {isOriginal && (
          <Text
            fontSize={"20px"}
            color={"white"}
            lineHeight={"24px"}
            fontWeight={"light"}
            textAlign={["center", "center", "left"]}>
            Original de <Text as={"b"}>Liteflix</Text>
          </Text>
        )}
        <Heading
          textTransform={"uppercase"}
          color={"brand"}
          textAlign={["center", "center", "left"]}
          letterSpacing={9}
          fontSize={{ base: "76px", lg: "120px" }}>
          {title}
        </Heading>
      </Stack>

      <Stack flexDirection={["column", "row"]} alignItems={"center"}>
        <Button leftIcon={<Play />} as={"a"} href={link} variant={"primary"}>
          Reproducir
        </Button>
        <Button leftIcon={<Plus />} as={"a"} variant={"secondary"}>
          Mi lista
        </Button>
      </Stack>
    </Stack>
  );
};
