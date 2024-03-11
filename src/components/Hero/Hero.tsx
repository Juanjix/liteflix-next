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
    width: 246,
    padding: "28px 56px",
    letterSpacing: 4,
  };
  return (
    <Stack spacing={5}>
      <Stack>
        {isOriginal && (
          <Text>
            Original de <span>Liteflix</span>
          </Text>
        )}
        <Heading
          textTransform={"uppercase"}
          color={"brand"}
          fontSize={"9xl"}
          letterSpacing={9}>
          {title}
        </Heading>
      </Stack>

      <HStack>
        <Button
          leftIcon={<Play />}
          as={"a"}
          href={link}
          style={ButtonStyle}
          background={"darkgrey"}
          color={"white"}>
          Reproducir
        </Button>
        <Button leftIcon={<Plus />} variant={"outline"} style={ButtonStyle}>
          Mi lista
        </Button>
      </HStack>
    </Stack>
  );
};
