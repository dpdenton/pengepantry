import './App.css';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {Button} from '@pengepantry/core/lib/components/button/Button';
import {NavBar} from 'components/nav-bar/NavBar';
import {AppSection} from 'components/app-section/AppSection';
import {ColSpacer} from '@pengepantry/core/lib/components/layout/Spacer';

const App = () => {
  return (
    <AppView>
      <AppSection>
        <ColSpacer size="l" />
        <NavBar />
        <ColSpacer size="l" />
      </AppSection>
      <AppSection>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <AppView>
            <ColSpacer size="l" />
            <ColSpacer size="l" />
            <AppView>
              <AppText variant="hero">
                All The Best Curated Delicious Food and Drink
              </AppText>
            </AppView>
            <ColSpacer size="l" />
            <ColSpacer size="l" />
            <AppView>
              <AppText variant="p1">
                Are you looking for amazing recipe library? Don’t worry! We got
                it for you!
              </AppText>
            </AppView>
            <ColSpacer size="l" />
            <ColSpacer size="l" />
            <Button>GET STARTED</Button>
          </AppView>
          <img
            src={require('images/hero-recipe.png')}
            alt="recipe hero image"
          />
        </div>
      </AppSection>
    </AppView>
  );
};

export default App;
