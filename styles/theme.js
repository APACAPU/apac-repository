// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: "teal.400",
        _hover: {
          color: "teal.600",
        },
      },
    },
  },
});

export default theme;
