import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import Footer from "./Footer";
import Search from "./Search";

export default function SideBar() {
  return (
    <Flex
      as="nav"
      pos="fixed"
      left={0}
      height="100vh"
      w={72}
      justifyContent="space-between"
      flexDir="column"
      px={4}
      borderRightColor="gray.300"
      borderRightWidth="1px"
      borderRightStyle="solid"
      pt={6}
      pb={1}
      bg="teal.900"
    >
      <Box>
        <Link href="/">
          <Image src="/images/apac-logo.png" alt="APAC Logo" w="52" mx="auto" />
          <Text
            textAlign="center"
            fontSize="2xl"
            fontWeight="bold"
            color="white"
            as="h1"
            mt="2"
          >
            APAC Repository
          </Text>
        </Link>
        <Search />
        {/* TODO: Put categories here */}
      </Box>
      <Footer />
    </Flex>
  );
}
