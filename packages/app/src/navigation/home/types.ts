export enum HomeRoute {
  MenuMain = 'MENU_MAIN',
  MenuSelection = 'MENU_SELECTION',
  MenuReview = 'MEN_REVIEW',
}

export type HomeStackParamList = {
  [HomeRoute.MenuMain]: undefined;
  [HomeRoute.MenuSelection]: undefined;
  [HomeRoute.MenuReview]: undefined;
};
