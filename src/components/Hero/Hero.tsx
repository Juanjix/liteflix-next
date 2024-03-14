import { Text, Heading, Button, HStack, Stack } from "@chakra-ui/react";
import { Play, Plus } from "lucide-react";

interface HeroProps {
  title: string;
  isOriginal: boolean;
  link: string;
}

export const Hero = (props: HeroProps) => {
  const { title, isOriginal, link } = props;
  const ButtonStyle = {
    maxWidth: 246,
    padding: "28px 56px",
    letterSpacing: 4,
  };
  return (
    <Stack spacing={5} w={"full"} paddingBottom={[20, 10]}>
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

      <Stack
        direction={["column", "row"]}
        justifyContent={["center", "left"]}
        alignItems={["center", "left"]}>
        <Button
          leftIcon={<Play />}
          as={"a"}
          href={link}
          style={ButtonStyle}
          variant={"primary"}>
          Reproducir
        </Button>
        <Button leftIcon={<Plus />} variant={"secondary"} style={ButtonStyle}>
          Mi lista
        </Button>
      </Stack>
    </Stack>
  );
};
