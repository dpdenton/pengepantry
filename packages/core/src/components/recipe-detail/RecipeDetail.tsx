import React from 'react';
import {Image} from 'react-native';
import styled from '@emotion/native';
import {Row} from 'components/layout/Row';
import {Heading} from 'components/heading/Heading';
import {RecipeHighlights} from 'components/recipe-highlights/RecipeHighlights';
import {ColLarge, RowMedium} from 'components/layout/Spacer';
import {AppText} from 'components/app-text/AppText';
import {UnorderedList} from 'components/unordered-list/UnorderedList';

interface Props {
  title: string;
  subTitle?: string;
  heroImageUrl: string;
}
export const RecipeDetail: React.FC<Props> = ({
  title,
  subTitle,
  heroImageUrl,
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
      <UnorderedList />
    </>
  );
};

const HeroImage = styled(Image)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;
