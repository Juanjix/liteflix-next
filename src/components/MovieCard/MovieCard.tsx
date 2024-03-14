import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { Play } from "lucide-react";

interface MovieCardProps {
  imageUrl: string;
  title: string;
  ranking?: number;
  year?: string;
}

export const MovieCard = (props: MovieCardProps) => {
  const { imageUrl, title, ranking, year } = props;

  return (
    <>
      <Box
        backgroundImage={imageUrl}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        backgroundPosition={"top center"}
        width={["327px", "300px", "240px"]}
        height={["172px", "172px", "146px"]}>
        <Stack
          justifyContent={"space-evenly"}
          alignItems={"center"}
          h={"full"}
          background={
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%)"
          }>
          <Box mt={"30px"}>
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
