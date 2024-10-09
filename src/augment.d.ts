import type { ExtendTheme } from "@pigment-css/react/theme";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    palette: {
      main: string;
    };
  }
  export interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light";
      tokens: {
        palette: {
          main: string;
        };
      };
    }>;
  }
}
