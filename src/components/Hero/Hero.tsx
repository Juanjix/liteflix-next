import { Text, Heading, Button, HStack, Stack } from "@chakra-ui/react";
import { Play, Plus } from "lucide-react";

interface HeroProps {
  title: string;
  isOriginal: boolean;
  link: string;
}

export const Hero = (props: HeroProps) => {
  const { title, isOriginal, link } = props;
  return (
    <Stack spacing={5}>
      <Stack>
        {isOriginal && <Text>Original de Liteflix</Text>}
        <Heading textTransform={"uppercase"}>{title}</Heading>
      </Stack>

      <HStack>
        <Button leftIcon={<Play />} as={"a"} href={link}>
          Reproducir
        </Button>
        <Button leftIcon={<Plus />} variant={"outline"}>
          Mi lista
        </Button>
      </HStack>
    </Stack>
  );
};
