import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="pink">
          LuksoVerse
        </Heading>
        <Spacer />
        <IconButton
          ml={8}
          icon={<FaLinkedin />}
          isRound="true"
          onClick={toggleColorMode}
        />
        <IconButton
          ml={8}
          icon={<FaInstagram />}
          isRound="true"
          onClick={toggleColorMode}
        />
        <IconButton
          ml={8}
          icon={<FaGithub />}
          isRound="true"
          onClick={toggleColorMode}
        />
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
