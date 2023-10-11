import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    menuOptionSelected: {
      dark: string;
      light: string;
      main: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    menuOptionSelected?: {
      dark: string;
      light: string;
      main: string;
    };
  }
}
