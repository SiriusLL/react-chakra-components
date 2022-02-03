import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  usSystemColorMode: false,
}

const theme = extendTheme({config})

export default theme