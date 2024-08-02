// stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, theme } = createStitches({
  theme: {
    colors: {
      backgroundColor: 'white',
      borderColor: 'black',
    },
    shadows: {
      psuedoBorder: 'drop-shadow(0px 1px 0px $colors$borderColor) drop-shadow(0px -1px 0px $colors$borderColor) drop-shadow(-1px 0px 0px $colors$borderColor) drop-shadow(1px 0px 0px $colors$borderColor)',
    },
  },
});
