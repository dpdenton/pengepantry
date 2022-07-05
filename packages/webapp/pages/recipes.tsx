import {NextPage} from 'next';
import React from 'react';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {NavBar} from 'components/nav-bar/NavBar';
import {AppSection} from 'components/app-section/AppSection';
import {AppGrid} from 'components/app-grid/AppGrid';
import {SelectedRecipeIds} from 'components/SelectedRecipeIds';
import {RecipeListRedux} from 'components/recipe-list/RecipeList.redux';

const Recipes: NextPage = () => {
  return (
    <AppView>
      <AppSection>
        <NavBar />
      </AppSection>
      <AppSection>
        <AppGrid cols={3}>
          <RecipeListRedux />
        </AppGrid>
      </AppSection>
      <SelectedRecipeIds />
    </AppView>
  );
};

export default Recipes;
