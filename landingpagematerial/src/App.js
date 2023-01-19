import { useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Hero from './components/header/Hero';
import About from './components/main/About';
import Recommendations from './components/recommendations/Recommendations';
import { createTheme, ThemeProvider, Box } from '@mui/material';
function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  Aos.init({
    duration: 1800,
    offset: 0
  })

  

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Hero setMode={setMode} mode={mode} />
        <About />
        <Features />
        <Recommendations />
        <Footer />
      </Box>
    </ThemeProvider>

  );
}

export default App;
