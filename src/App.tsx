import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TestResultsDashboard from './TestResultsDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
    },
    success: {
      main: '#10B981',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TestResultsDashboard />
    </ThemeProvider>
  );
}

export default App;