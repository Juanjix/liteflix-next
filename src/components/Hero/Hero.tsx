import { HeroProps } from "@/types";
import { Text, Heading, Button, Stack, ButtonGroup } from "@chakra-ui/react";
import { Play, Plus } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = (props: HeroProps) => {
  const { title, isOriginal, link } = props;

  return (
    <Stack spacing={5} w={"full"} paddingBottom={[20, 50]}>
      <Stack>
        {isOriginal && (
          <Text
            fontSize={"20px"}
            color={"white"}
            letterSpacing={"4px"}
            lineHeight={"24px"}
            fontWeight={"light"}
            textAlign={["center", "left"]}>
            Original de <Text as={"b"}>Liteflix</Text>
          </Text>
        )}
        <Heading
          textTransform={"uppercase"}
          color={"brand"}
          textAlign={["center", "left"]}
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
