import React from 'react';
import {Animated} from 'react-native';
import {Row} from 'components/layout/Row';

interface Props {
  uri: string;
  scale: Animated.Value;
}

export const RecipeSelection: React.FC<Props> = ({uri, scale}) => {
  return (
    <Row className="w-1/4 justify-center rounded-1 border border-neutral-300">
      <Animated.Image
        source={{uri}}
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          transform: [{scale}],
        }}
      />
    </Row>
  );
};
