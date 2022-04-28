import React from 'react';
import {AppText} from '@pengepantry/core/lib/components/app-text/AppText';
import {Screen} from '@pengepantry/core/lib/components/screen/Screen';
import {ColMedium} from '@pengepantry/core/lib/components/layout/Spacer';
import {ScrollView} from 'react-native';
import {RowMedium} from '@pengepantry/core/lib/components/layout/Spacer';
import {RecipePopular} from '@pengepantry/core/lib/components/recipe-popular/RecipePopular';
import {RecipeButton} from '@pengepantry/core/lib/components/recipe-button/RecipeButton';

const uris = [
  'https://upserve.com/media/sites/2/bigstock-Staff-showing-a-sample-of-chee-189121246-1100x600.jpg',
  'https://www.gardengourmet.com/sites/default/files/styles/20_7_1920px_width_/public/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg?h=2558ec81&itok=aT4hU0mZ',
  'https://supervalu.ie/thumbnail/1440x480/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg',
];
export const Home = () => {
  return (
    <Screen>
      <AppText variant="h1">Welcome, Wisteria 👋</AppText>
      <AppText variant="p2">
        Locally source recipe boxes from your favourite shops
      </AppText>
      <ColMedium />
      <AppText variant="h2">Popular</AppText>
      <ColMedium />
      <ScrollView horizontal style={{flexGrow: 0}}>
        {uris.map((uri, index) => (
          <React.Fragment key={uri}>
            <RecipePopular uri={uri} name="Baked Spicy Salmon and Asparagus" />
            {index !== uris.length - 1 && <RowMedium />}
          </React.Fragment>
        ))}
      </ScrollView>
      <ColMedium />
      <AppText variant="h3">Welcome, Wisteria 👋</AppText>
      <ColMedium />
      <RecipeButton />
    </Screen>
  );
};
