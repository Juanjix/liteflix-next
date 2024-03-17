import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bebas-neue";

export const theme = extendTheme({
  styles: {
    global: {
      "html,body,#__next": {
        height: "100%",
        minHeight: "100%",
        background: "black",
        letterSpacing: "4px",
      },
    },
  },
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'Bebas Neue', sans-serif`,
  },
  colors: {
    brand: "#64EEBC",
    darkgrey: "#242424",
    green: {
      500: "#64EEBC",
    },
  },
  components: {
    Button: {
      baseStyle: {
        textTransform: "uppercase",
        color: "white",
        letterSpacing: "4px",
        fontSize: "18px",
      },
      variants: {
        primary: {
          borderRadius: "0",
          width: "246px",
          padding: "28px 56px",
          backgroundColor: "darkgrey",
          border: "1px solid #242424",
          _hover: {
            border: "1px solid white",
          },
        },
        secondary: {
          padding: "28px 56px",
          width: "246px",
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "0",
          _hover: {
            border: "1px solid darkgrey",
          },
        },
        ghost: {
          color: "white",
          _hover: {
            backgroundColor: `rgba(0,0,0,0.5)`,
          },
        },
        link: {
          textAlign: "left",
          color: "white",
          alignItems: "left",
          justifyContent: "left",
          fontWeight: 100,
        },
        sendData: {
          width: "246px",
          padding: "28px 56px",
          border: "1px solid",
          borderRadius: 0,
        },
      },
    },
    Modal: {
      dialogContainer: {
        baseStyle: {
          textTransfom: "uppercase",
        },
      },
    },

    Progress: {
      variants: {
        success: {
          filledTrack: {
            bg: "#64EEBC",
          },
        },
      },
    },
  },
});
