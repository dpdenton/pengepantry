import React from 'react';
import {Image} from 'react-native';
import styled from '@emotion/native';
import {Row} from 'components/layout/Row';
import {Heading} from 'components/heading/Heading';
import {RecipeHighlights} from 'components/recipe-highlights/RecipeHighlights';
import {ColLarge, ColMedium, RowMedium} from 'components/layout/Spacer';
import {AppText} from 'components/app-text/AppText';
import {NamedEntity} from 'utils/types';
import {UnorderedListItem} from 'components/list/UnorderedListItem';
import {AppView} from 'components/layout/AppView';
import {CookingStep} from 'components/cooking-steps/CookingStep';

interface Props {
  title: string;
  subTitle?: string;
  heroImageUrl: string;
  ingredients: NamedEntity[];
  cookingSteps: string[];
}
export const RecipeDetail: React.FC<Props> = ({
  title,
  subTitle,
  heroImageUrl,
  ingredients,
  cookingSteps,
}) => {
  return (
    <>
      <ColLarge />
      <Heading title={title} subTitle={subTitle} />
      <ColLarge />
      <Row>
        <RecipeHighlights />
        <RowMedium />
        <HeroImage source={{uri: heroImageUrl}} />
      </Row>
      <ColLarge />
      <AppText variant="h2">Ingredients</AppText>
      <ColLarge />
      {ingredients.map(({name}, index) => (
        <AppView key={index}>
          <UnorderedListItem>{name}</UnorderedListItem>
          <ColMedium />
        </AppView>
      ))}
      <AppText variant="h2">Method</AppText>
      <ColLarge />
      {cookingSteps.map((cookingStep, index) => (
        <CookingStep
          key={index}
          descriptions={[cookingStep]}
          label={`Step ${index + 1}`}
        />
      ))}
    </>
  );
};

const HeroImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
