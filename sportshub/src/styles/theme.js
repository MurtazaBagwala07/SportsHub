import { extendTheme } from "@chakra-ui/react";

export const sportsHubTheme = extendTheme({
    colors:{
        primary: '#36454F',
        secondary: '#2A9D8F',
        text:'#F1F2EB'
    },
    radii: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      }
})