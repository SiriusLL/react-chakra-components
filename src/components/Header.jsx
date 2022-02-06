import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <Stack>
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Flex
          direction={isNotSmallerScreen ? "row" : "Column"}
          spacing="200px"
          p={isNotSmallerScreen ? "32" : "0"}
          alignSelf="flex-start"
        >
          <Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
            <Text fontSize="5x1" fontWeight="semibold">
              Hi, my name is
            </Text>
            <Text
              fontSize="7x1"
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              James McBickalik
            </Text>
            <Text color={isDark ? "gray.200" : "grey.500"}>
              GDE - Flutter, Firebase. Funder of https://example.com & https
              rest of description goes here
            </Text>
            <Button
              mt={8}
              colorScheme="blue"
              onClick={() => {
                window.open("https://example.com");
              }}
            >
              Hire Me
            </Button>
          </Box>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="1g"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/12619429?v=4"
          />
        </Flex>
      </Stack>
    </div>
  );
}

export default Header;
