import { Box, Button, Container, Flex, Heading, Link, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const colorScheme = "blue";
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Navigation Bar */}
        <Box as="nav" bg={bgColor} px={4} py={2} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              MyPortfolio
            </Heading>
            <Flex gap={4}>
              <Button leftIcon={<FaHome />} colorScheme={colorScheme} variant="ghost">
                Home
              </Button>
              <Button leftIcon={<FaUser />} colorScheme={colorScheme} variant="ghost">
                About
              </Button>
              <Button leftIcon={<FaEnvelope />} colorScheme={colorScheme} variant="ghost">
                Contact
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* Main Content */}
        <Flex direction="column" flex="1" p={4} bg={bgColor} color={textColor}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Welcome to My Portfolio</Heading>
              <Text mt={4}>Explore my projects, skills, and professional journey.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <Heading fontSize="xl">Latest Projects</Heading>
              <Text mt={4}>Discover what I've been working on recently!</Text>
            </Box>
          </VStack>
        </Flex>

        {/* Footer */}
        <Box as="footer" bg={bgColor} color={textColor} py={2}>
          <Flex justify="space-between" align="center" px={4}>
            <Text>© 2023 MyPortfolio. All rights reserved.</Text>
            <Flex gap={2}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
