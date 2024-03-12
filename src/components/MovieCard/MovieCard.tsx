import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { Play } from "lucide-react";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  ranking: number;
  year: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const { imageUrl, title, ranking, year } = props;

  return (
    <>
      <Box
        backgroundImage={imageUrl}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        width={220}
        height={146}>
        <Stack justifyContent={"center"} alignItems={"center"} h={"full"}>
          <Box>
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
            letterSpacing={"4px"}
            textAlign={"center"}
            fontWeight={400}>
            {title}
          </Text>
        </Stack>
      </Box>
    </>
  );
};
