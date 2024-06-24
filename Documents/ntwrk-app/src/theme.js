// src/theme.js
import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Fira Code', monospace",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Fira Code';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Fira Code'), local('FiraCode-Regular'), url(https://fonts.googleapis.com/css2?family=Fira+Code&display=swap);
          unicodeRange: U+000-5FF; /* Latin glyphs */
        }
      `,
    },
  },
});

export default theme;