import React from 'react';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {RecipeHighlight} from 'components/recipe-highlights/RecipeHighlight';
import {ColSpacer} from 'components/layout/Spacer';

export const RecipeHighlights = () => {
  return (
    <AppView>
      <AppText variant="h1">Key Facts</AppText>
      <ColSpacer />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
      <ColSpacer />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
      <ColSpacer />
      <RecipeHighlight highlight={180} title="Calories" subTitle="kcal" />
    </AppView>
  );
};
