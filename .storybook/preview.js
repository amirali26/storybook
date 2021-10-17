import { ThemeProvider } from "@mui/material"
import { addDecorator } from "@storybook/react"
import theme from "../src/theme/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))