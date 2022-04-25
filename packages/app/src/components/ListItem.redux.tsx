import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  ListItem,
  ListItemProps,
} from '@pengepantry/core/lib/components/list-item/ListItem';
import {useRecipeSelections} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {selectionsSlice} from '@pengepantry/core/lib/store/recipeStore';
import {Item} from '@pengepantry/core/lib/components/list-item/ListItem';

export const ListItemRedux: React.FC<Omit<ListItemProps, 'onPress'>> =
  props => {
    const selectedRecipeIds = useRecipeSelections();
    const dispatch = useDispatch();

    const animated = useRef(new Animated.Value(1)).current;

    const onPress = (item: Item) => {
      const isSelected = selectedRecipeIds.includes(item.id);
      Animated.timing(animated, {
        toValue: isSelected ? 1 : 0,
        useNativeDriver: true,
      }).start();
      dispatch(selectionsSlice.actions.toggleRecipeSelection(item.id));
    };

    const style: Animated.Animated = {
      opacity: animated,
      transform: [
        {
          scale: animated,
        },
      ],
    };

    return <ListItem item={props.item} onPress={onPress} imageStyle={style} />;
  };
