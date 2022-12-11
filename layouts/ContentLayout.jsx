import { Box } from "@chakra-ui/react";

export default function ContentLayout({ children }) {
  return <Box as="main" maxW="4xl" py={8}>{children}</Box>;
}
