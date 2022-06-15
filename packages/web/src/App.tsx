import './App.css';
import {ThemeProvider} from '@emotion/react';
import {appTheme} from '@pengepantry/core/lib/theme';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {Button} from '@pengepantry/core/lib/components/button/Button';
import {NavBar} from 'components/nav-bar/NavBar';
import {AppSection} from 'components/app-section/AppSection';
import {ColLarge} from '@pengepantry/core/lib/components/layout/Spacer';

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AppView>
        <AppSection>
          <ColLarge />
          <NavBar />
          <ColLarge />
        </AppSection>
        <AppSection>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <AppView>
              <ColLarge />
              <ColLarge />
              <AppView>
                <AppText variant="hero">
                  All The Best Curated Delicious Food and Drink
                </AppText>
              </AppView>
              <ColLarge />
              <ColLarge />
              <AppView>
                <AppText variant="p1">
                  Are you looking for amazing recipe library? Don’t worry! We
                  got it for you!
                </AppText>
              </AppView>
              <ColLarge />
              <ColLarge />
              <Button label="GET STARTED" />
            </AppView>
            <img
              src={require('images/hero-recipe.png')}
              alt="recipe hero image"
            />
          </div>
        </AppSection>
      </AppView>
    </ThemeProvider>
  );
};

export default App;
