import React from 'react';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {RecipeHighlight} from 'components/recipe-highlights/RecipeHighlight';
import {ColMedium, ColSmall} from 'components/layout/Spacer';

export const RecipeHighlights = () => {
  return (
    <AppView>
      <AppText variant="h1">Key Facts</AppText>
      <ColMedium />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
      <ColSmall />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
      <ColSmall />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
    </AppView>
  );
};
