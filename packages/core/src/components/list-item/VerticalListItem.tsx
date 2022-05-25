import * as React from 'react';
import {IconName} from 'icons/Icon';
import {Image} from 'react-native';
import {Row} from 'components/layout/Row';
import styled from '@emotion/native';
import {RowMedium} from 'components/layout/Spacer';

interface Props {
  imageUri?: string;
  iconName?: IconName;
}

export const VerticalListItem: React.FC<Props> = ({children, imageUri}) => {
  return (
    <Row>
      {imageUri && <AppImage source={{uri: imageUri}} />}
      <RowMedium />
      <VerticalListItemContent>{children}</VerticalListItemContent>
    </Row>
  );
};

const VerticalListItemContent = styled(Row)`
  flex-grow: 1;
`;

const AppImage = styled(Image)`
  width: 50px;
  height: 50px;
`;
