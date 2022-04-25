export const isRecipeSelected = (params: {
  recipeId: string;
  selectedRecipeIds: (string | undefined)[];
}) => {
  const {recipeId, selectedRecipeIds} = params;
  return selectedRecipeIds.includes(recipeId);
};
