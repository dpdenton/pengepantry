import React, {useRef} from 'react';
import {
  ListItem,
  ListItemProps,
} from '@pengepantry/core/lib/components/list-item/ListItem';
import {useRecipeSelections} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {useDispatch} from 'react-redux';
import {selectionsSlice} from '@pengepantry/core/lib/store/recipeStore';
import {Animated} from 'react-native';

export const ListItemRedux: React.FC<Omit<ListItemProps, 'onPress'>> = ({
  item,
}) => {
  const recipeSelections = useRecipeSelections();
  const dispatch = useDispatch();

  const animated = useRef(new Animated.Value(1)).current;

  const onPress = () => {
    const recipeId =
      recipeSelections.recipeOneId === item.id ? undefined : item.id;
    Animated.timing(animated, {
      toValue: recipeId ? 0 : 1,
      useNativeDriver: true,
    }).start();
    dispatch(selectionsSlice.actions.setRecipeOneId(recipeId));
  };

  const style: Animated.Animated = {
    opacity: animated,
    transform: [
      {
        scale: animated,
      },
    ],
  };

  return <ListItem item={item} onPress={onPress} imageStyle={style} />;
};
