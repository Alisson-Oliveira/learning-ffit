import { useState } from 'react';

import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

import Home from './Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#ff0000",
      },
      secondary: {
        main: "#1976d2"
      },
      background: {
        default: darkMode ? "#232323" : "#ffffff",
        paper: darkMode ? "#232323" : "#ffffff"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
