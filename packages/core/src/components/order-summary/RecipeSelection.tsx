import React from 'react';
import {Animated} from 'react-native';
import styled from '@emotion/native';
import {FlexRow} from 'components/layout/FlexRow';

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
          transform: [{scale}],
        }}
      />
    </OrderItem>
  );
};

const OrderItem = styled(FlexRow)`
  width: 25%;
  flex-grow: 1;
  justify-content: center;
`;

const SelectionImageView = styled(Animated.Image)``;