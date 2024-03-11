import { extendTheme } from '@chakra-ui/react'
import "@fontsource/bebas-neue"

export const theme = extendTheme({
  fonts:{
    heading: `'Bebas Neue', sans-serif`,
  },
  colors: {
    brand: "#64EEBC",
    darkgrey: "#242424",
  },
  components:{
    Button: {
      baseStyle: {
        textTransform: "uppercase",
      },
      primary: {
        background: "darkgrey",
      }
    },
    Modal:{
      dialogContainer:{
        baseStyle: {
          textTransfom: "uppercase"
        }
      }
    }
  }
})