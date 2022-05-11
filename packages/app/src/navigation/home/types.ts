export enum MenuRoute {
  MenuHome = 'MENU_HOME',
  MenuSelection = 'MENU_SELECTION',
  MenuReview = 'MENU_REVIEW',
  RecipeDetail = 'RECIPE_DETAIL',
}

export type HomeStackParamList = {
  [MenuRoute.MenuHome]: undefined;
  [MenuRoute.MenuSelection]: undefined;
  [MenuRoute.MenuReview]: undefined;
  [MenuRoute.RecipeDetail]: undefined;
};
