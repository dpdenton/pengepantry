import {NextPage} from 'next';
import React from 'react';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {NavBar} from 'components/nav-bar/NavBar';
import {AppSection} from 'components/app-section/AppSection';
import {AppGrid} from 'components/app-grid/AppGrid';
import {RecipeListRedux} from 'components/recipe-list/RecipeList.redux';

const Recipes: NextPage = () => {
  return (
    <AppView>
      <AppSection>
        <NavBar />
      </AppSection>
      <AppSection>
        <AppGrid cols={3} gap={4}>
          <RecipeListRedux />
        </AppGrid>
      </AppSection>
    </AppView>
  );
};

export default Recipes;
