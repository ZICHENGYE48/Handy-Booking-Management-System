import React from 'react';
import
{BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Layout from './Layout';


function App() {

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout/>
    </Router>
    </ThemeProvider>
  );
}

export default App;
