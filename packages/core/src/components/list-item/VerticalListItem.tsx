import React, {PropsWithChildren} from 'react';
import {IconName} from 'icons/Icon';
import {Image} from 'react-native';
import {Row} from 'components/layout/Row';
import {RowSpacer} from 'components/layout/Spacer';

interface Props {
  imageUri?: string;
  iconName?: IconName;
}

export const VerticalListItem: React.FC<PropsWithChildren<Props>> = ({
  children,
  imageUri,
}) => {
  return (
    <Row>
      {imageUri && (
        <Image source={{uri: imageUri}} style={{height: 50, width: 50}} />
      )}
      <RowSpacer />
      <Row>{children}</Row>
    </Row>
  );
};
