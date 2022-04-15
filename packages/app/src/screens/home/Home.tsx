import React, {Fragment, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {ListItem} from '@pengepantry/core/lib/components/list-item/ListItem';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {Spacer} from '@pengepantry/core/lib/components/layout/Spacer';
import {
  useAppStore,
  useRecipesList,
} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {recipeStore} from '@pengepantry/core/lib/store/recipeStore';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {OrderSummary} from '@pengepantry/core/lib/components/order-summary/OrderSummary';
import {SearchBar} from '@pengepantry/core/lib/components/search-bar/SearchBar';

export function Home() {
  const recipes = useRecipesList();
  const dispatch = useDispatch();

  const product = useAppStore(state => ({
    loading: state.recipeStore.loading,
    item: state.recipeStore.recipe,
  }));

  useEffect(() => {
    dispatch(recipeStore.actions.fetchRecipe(321));
  }, [dispatch]);

  if (product.loading) {
    return <AppText>Loading</AppText>;
  }
  return (
    <Screen>
      <Spacer size={16} />
      <SearchBar />
      <Spacer size={28} />
      <ScrollView>
        {recipes.map(recipe => (
          <Fragment key={recipe.id}>
            <ListItem item={recipe} onPress={() => {}} />
            <Spacer size={28} />
          </Fragment>
        ))}
      </ScrollView>
      <OrderSummary counter={1} />
    </Screen>
  );
}
