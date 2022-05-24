import React from 'react';
import {Dot} from 'components/dot/Dot';
import {RowMedium} from 'components/layout/Spacer';
import {CenteredRow} from 'components/layout/Row';
import {useAppTheme} from 'theme/hooks';
import {AppText} from 'components/app-text/AppText';

export const UnorderedListItem: React.FC = ({children}) => {
  const appTheme = useAppTheme();
  return (
    <CenteredRow>
      <Dot size={6} color={appTheme.tertiary.color} />
      <RowMedium />
      <AppText>{children}</AppText>
    </CenteredRow>
  );
};
