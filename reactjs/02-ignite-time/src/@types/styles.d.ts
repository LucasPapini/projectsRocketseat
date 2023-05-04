import 'styled-components'
import { defualtTheme } from '../styles/themes/default'

// Guardando o valor inserido pelo typescript
type ThemeType = typeof defualtTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
