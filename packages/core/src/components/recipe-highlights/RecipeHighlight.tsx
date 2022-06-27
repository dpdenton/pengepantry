import React from 'react';
import {CenteredRow} from 'components/layout/Row';
import {AppView} from 'components/layout/AppView';
import {AppText} from 'components/app-text/AppText';
import {RowSpacer} from 'components/layout/Spacer';

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
      <AppView className="bg-neutral-100 h-8 w-8 justify-center items-center rounded-1">
        <AppText>{String(highlight)}</AppText>
      </AppView>
      <RowSpacer />
      <AppView>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </AppView>
    </CenteredRow>
  );
};
