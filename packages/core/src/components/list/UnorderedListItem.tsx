import React from 'react';
import {Dot} from 'components/dot/Dot';
import {RowSpacer} from 'components/layout/Spacer';
import {CenteredRow} from 'components/layout/Row';
import {AppText} from 'components/app-text/AppText';

type Props = {
  children: string;
};

export const UnorderedListItem: React.FC<Props> = ({children}) => {
  return (
    <CenteredRow>
      <Dot size={6} color="red" />
      <RowSpacer />
      <AppText>{children}</AppText>
    </CenteredRow>
  );
};
