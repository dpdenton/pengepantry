import type {NextPage} from 'next';
import Image from 'next/image';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {Button} from '@pengepantry/core/lib/components/button/Button';
import {ColSpacer} from '@pengepantry/core/lib/components/layout/Spacer';
import {NavBar} from 'components/nav-bar/NavBar';
import {AppSection} from 'components/app-section/AppSection';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {recipeDataSlice} from '@pengepantry/core/lib/store/slices/recipe-data-slice';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeDataSlice.actions.fetchRecipe('123'));
  });
  return (
    <AppView>
      <AppSection>
        <NavBar />
      </AppSection>
      <AppSection>
        <AppView className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <AppView>
            <ColSpacer size="l" />
            <AppText variant="hero">
              All The Best Curated Delicious Food and Drink
            </AppText>
            <ColSpacer size="l" />
            <AppText variant="p1">
              Are you looking for amazing recipe library? Don’t worry! We got it
              for you!
            </AppText>
            <ColSpacer size="l" />
            <Button intent="positive">GET STARTED</Button>
          </AppView>
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image
              src="/images/hero-recipe.png"
              layout="responsive"
              objectFit="contain"
              height="100%"
              width="100%"
            />
          </div>
        </AppView>
      </AppSection>
    </AppView>
  );
};

export default Home;
