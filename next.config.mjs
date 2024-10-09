import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

// To learn more about theming, visit https://github.com/mui/pigment-css/blob/master/README.md#theming
export default withPigment(nextConfig, {
  theme: extendTheme({
    palette: {
      main: "#fabada",
    },
    colorSchemes: {
      light: {
        palette: {
          main: "#bafada",
        },
      },
    },
  }),
});
