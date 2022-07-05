import React, {forwardRef, useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {AppAnimation, AppImageProps} from 'components/app-image/AppImage.types';

export const AppImage = forwardRef<AppAnimation, AppImageProps>(
  (props, ref) => {
    const {url} = props;
    const animated = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      if (ref && typeof ref !== 'function') {
        ref.current = {
          scale: toValue => {
            Animated.timing(animated, {
              toValue,
              useNativeDriver: true,
            }).start();
          },
        };
      }
    }, []);

    return (
      <Animated.Image
        source={{uri: url}}
        style={{
          height: 180,
          width: 180,
          opacity: animated,
          transform: [
            {
              scale: animated,
            },
          ],
        }}
      />
    );
  },
);
