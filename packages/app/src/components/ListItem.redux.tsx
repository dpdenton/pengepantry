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
import {useNavigation} from '@react-navigation/native';
import {MenuRoute} from 'navigation/home/types';

export const ListItemRedux: React.FC<Omit<ListItemProps, 'onAdd' | 'onPress'>> =
  props => {
    const {navigate} = useNavigation();
    const dispatch = useDispatch();
    const selectedRecipeIds = useRecipeSelections();
    const animated = useRef(new Animated.Value(1)).current;

    const onAdd = (item: Item) => {
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

    return (
      <ListItem
        item={props.item}
        onAdd={onAdd}
        imageStyle={style}
        onPress={() => navigate(MenuRoute.RecipeDetail)}
      />
    );
  };
