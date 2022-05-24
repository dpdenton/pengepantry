import React from 'react';
import {Image, ScrollView} from 'react-native';
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
            isFirst={index === 0}
            isLast={cookingSteps.length - 1 === index}
          />
        ))}
      </ScrollView>
      <ButtonContainer>
        <Button
          label={isSelected ? 'REMOVE RECIPE' : 'ADD RECIPE'}
          onPress={addRecipe}
        />
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled(AppView)`
  padding: ${({theme}) => theme.spacing.l.toString()}px;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.neutral.light};
`;

const HeroImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
