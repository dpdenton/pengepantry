import React, {Fragment, useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from '@emotion/native';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {SearchBar} from '@pengepantry/core/lib/components/search-bar/SearchBar';
import {AppView} from '@pengepantry/core/lib/components/layout/AppView';
import {ListItemRedux} from 'components/ListItem.redux';
import {OrderSummaryRedux} from 'components/OrderSummary.redux';
import {
  ColLarge,
  ColMedium,
} from '@pengepantry/core/lib/components/layout/Spacer';
import {
  useAppStore,
  useRecipesList,
} from '@pengepantry/core/lib/store/store-selectors';
import {recipeDataSlice} from '@pengepantry/core/lib/store/slices/recipe-data-slice';

export const MenuSelection = () => {
  const recipes = useRecipesList();
  const dispatch = useDispatch();

  const product = useAppStore(state => ({
    loading: state.recipeData.loading,
    item: state.recipeData.recipe,
  }));

  useEffect(() => {
    dispatch(recipeDataSlice.actions.fetchRecipe(321));
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
