import './App.css';
import {ThemeProvider} from '@emotion/react';
import {appTheme} from '@pengepantry/core/lib/theme';
import {Home} from 'screens/home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {MenuSelection} from 'screens/home/MenuSelection';
import {AppSection} from 'components/app-section/AppSection';
import {ColLarge} from '@pengepantry/core/lib/components/layout/Spacer';
import {NavBar} from 'components/nav-bar/NavBar';
const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <AppSection>
          <ColLarge />
          <NavBar />
          <ColLarge />
        </AppSection>
        <Routes>
          <Route path="/menu" element={<MenuSelection />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
