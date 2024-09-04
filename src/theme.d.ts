import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primaryAccent: Palette["primary"];
  }
  interface PaletteOptions {
    primaryAccent?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryAccent: true;
  }
}
