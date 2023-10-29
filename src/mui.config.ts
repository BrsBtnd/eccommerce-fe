import { createTheme } from '@mui/material';
import play from '@/typography';

const theme = createTheme({
  typography: {
    fontFamily: play.style.fontFamily,
  },
});

export default theme;
