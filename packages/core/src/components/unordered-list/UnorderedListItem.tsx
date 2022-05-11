import React from 'react';
import {Dot} from 'components/dot/Dot';
import {RowMedium} from 'components/layout/Spacer';
import {CenteredRow} from 'components/layout/Row';
import {useAppTheme} from 'theme/hooks';
import {AppText} from 'components/app-text/AppText';

export const UnorderedLisItem = () => {
  const appTheme = useAppTheme();
  return (
    <CenteredRow>
      <Dot size={16} color={appTheme.tertiary.color} />
      <RowMedium />
      <AppText>List item</AppText>
    </CenteredRow>
  );
};
