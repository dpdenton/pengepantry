import React from 'react';
import {Image, ScrollView} from 'react-native';
import {Row} from 'components/layout/Row';
import {Heading} from 'components/heading/Heading';
import {RecipeHighlights} from 'components/recipe-highlights/RecipeHighlights';
import {ColSpacer, RowSpacer} from 'components/layout/Spacer';
import {AppText} from 'components/app-text/AppText';
import {NamedEntity} from 'utils/types';
import {UnorderedListItem} from 'components/list/UnorderedListItem';
import {AppView} from 'components/layout/AppView';
import {CookingStep} from 'components/cooking-steps/CookingStep';
import {Button} from 'components/button/Button';

interface Props {
  title: string;
  subTitle?: string;
  isSelected: boolean;
  heroImageUrl: string;
  ingredients: NamedEntity[];
  cookingSteps: string[];
  addRecipe: () => void;
}
export const RecipeDetail: React.FC<Props> = ({
  title,
  subTitle,
  isSelected,
  heroImageUrl,
  ingredients,
  cookingSteps,
  addRecipe,
}) => {
  return (
    <>
      <ScrollView>
        <ColSpacer />
        <Heading title={title} subTitle={subTitle} />
        <ColSpacer />
        <Row>
          <RecipeHighlights />
          <RowSpacer />
          <Image
            source={{uri: heroImageUrl}}
            style={{width: '100%', height: '100%'}}
          />
        </Row>
        <ColSpacer />
        <AppText variant="h2">Ingredients</AppText>
        <ColSpacer />
        {ingredients.map(({name}, index) => (
          <AppView key={index}>
            <UnorderedListItem>{name}</UnorderedListItem>
            <ColSpacer />
          </AppView>
        ))}
        <AppText variant="h2">Method</AppText>
        <ColSpacer />
        {cookingSteps.map((cookingStep, index) => (
          <CookingStep
            key={index}
            descriptions={[cookingStep]}
            label={`Step ${index + 1}`}
            isFirst={index === 0}
            isLast={cookingSteps.length - 1 === index}
          />
        ))}
      </ScrollView>
      <Button onPress={addRecipe}>
        {isSelected ? 'REMOVE RECIPE' : 'ADD RECIPE'}
      </Button>
    </>
  );
};
