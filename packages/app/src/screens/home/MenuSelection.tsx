import React, {Fragment, useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from '@emotion/native';
import {
  useAppStore,
  useRecipesList,
} from '@pengepantry/core/lib/store/selectors/recipeSelectors';
import {recipeStore} from '@pengepantry/core/lib/store/recipeStore';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {SearchBar} from '@pengepantry/core/lib/components/search-bar/SearchBar';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {ListItemRedux} from 'components/ListItem.redux';
import {OrderSummaryRedux} from 'components/OrderSummary.redux';
import {
  ColLarge,
  ColMedium,
} from '@pengepantry/core/lib/components/layout/Spacer';

export const MenuSelection = () => {
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
    return (
      <AppView
        style={{
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator />
      </AppView>
    );
  }

  return (
    <Screen>
      <ColMedium />
      <SearchBar />
      <ColLarge />
      <ScrollView>
        {recipes.map(recipe => (
          <Fragment key={recipe.id}>
            <ListItemRedux item={recipe} />
            <ColLarge />
          </Fragment>
        ))}
      </ScrollView>
      <OrderSummaryContainer>
        <OrderSummaryRedux />
      </OrderSummaryContainer>
    </Screen>
  );
};

const OrderSummaryContainer = styled(AppView)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
