import * as React from "react";
import { css } from "@pigment-css/react";

export default function Home() {
  return (
    <main
      className={css(({ theme }) => ({
        // WORKS
        color: theme.palette.main,
        backgroundColor: theme.vars.palette.main,
        // // UNCOMMENT FOR A CRASH
        // ["@media (min-width: 768px)"]: {
        //   color: theme.a.palette.main,
        //   backgroundColor: theme.a.main,
        // },
      }))}
    >
      <h1>Test</h1>
    </main>
  );
}
// unCOMMENTmeFORanotherCRASH;
