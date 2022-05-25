export const isRecipeSelected = (params: {
  recipeId: string;
  selectedRecipeIds: (string | undefined)[];
}) => {
  const {recipeId, selectedRecipeIds} = params;
  return selectedRecipeIds.includes(recipeId);
};

/**
 * Mutates @params.haystack; intended to be used with immutable libraries (immer)
 *
 * @param params
 */
export const toggleValue = <T>(params: {needle: T; haystack: T[]}) => {
  const {haystack, needle} = params;
  const foundIndex = haystack.indexOf(needle);
  if (foundIndex > -1) {
    haystack.splice(foundIndex, 1);
  } else {
    haystack.push(needle);
  }
};
