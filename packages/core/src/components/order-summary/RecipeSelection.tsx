import React from 'react';
import {Animated} from 'react-native';
import styled from '@emotion/native';
import {Row} from 'components/layout/Row';

interface Props {
  uri: string;
  scale: Animated.Value;
}

export const RecipeSelection: React.FC<Props> = ({uri, scale}) => {
  return (
    <OrderItem>
      <SelectionImageView
        source={{uri}}
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          transform: [{scale}],
        }}
      />
    </OrderItem>
  );
};

const OrderItem = styled(Row)`
  width: 25%;
  flex-grow: 1;
  justify-content: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: gainsboro;
`;

const SelectionImageView = styled(Animated.Image)``;
