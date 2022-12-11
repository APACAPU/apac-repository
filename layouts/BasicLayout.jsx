import { Box } from "@chakra-ui/react";
import Sidebar from "components/Sidebar";

export default function BasicLayout({ children }) {
  return (
    <>
      <Box pl={80}>
        <Sidebar />
        <Box> {children}</Box>
      </Box>
    </>
  );
}
