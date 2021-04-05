import { MuiThemeProvider } from "@material-ui/core"
import { addDecorator } from "@storybook/react"
import theme from "../src/theme/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    {story()}
  </MuiThemeProvider>
))