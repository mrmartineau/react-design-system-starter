import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../src/tokens/themeUiTheme'

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
