import React from 'react';
import styled from '@emotion/native';
import {CenteredRow} from 'components/layout/Row';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {RowSmall} from 'components/layout/Spacer';

interface Props {
  highlight: string | number;
  title: string;
  subTitle: string;
}

export const RecipeHighlight: React.FC<Props> = ({
  title,
  subTitle,
  highlight,
}) => {
  return (
    <CenteredRow>
      <Highlight>
        <AppText>{highlight}</AppText>
      </Highlight>
      <RowSmall />
      <AppView>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </AppView>
    </CenteredRow>
  );
};

const Highlight = styled(AppView)`
  background-color: ${props => props.theme.colors.neutral.light};
  height: 50px;
  width: 50px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
`;
