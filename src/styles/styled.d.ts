import {} from "styled-components";
import { ThemeType } from "./theme";
// Import type from above file
declare module "styled-components" {
  export type DefaultTheme = ThemeType; // extends the global DefaultTheme with our ThemeType.
}
