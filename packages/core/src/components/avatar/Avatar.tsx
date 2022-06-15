import {AppText} from 'components/app-text/AppText';
import {AppView} from 'components/layout/AppView';
import React from 'react';
import styled from '@emotion/native';

interface Props {
  initials?: string;
  color?: string;
  backgroundColor?: string;
}

export const Avatar: React.FC<Props> = ({initials, color, backgroundColor}) => {
  return (
    <AvatarBackground backgroundColor={backgroundColor}>
      <AppText color={color ?? 'white'} weight={700} size={16}>
        {initials}
      </AppText>
    </AvatarBackground>
  );
};

const AvatarBackground = styled(AppView)<Pick<Props, 'backgroundColor'>>`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor ?? theme.primary.color};
`;
