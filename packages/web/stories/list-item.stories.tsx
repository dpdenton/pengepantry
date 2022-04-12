import {ListItem} from '@pengepantry/core/lib/components/list-item/ListItem';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ListItem',
  component: ListItem,
};

export const RecipeListItem = () => (
  <ListItem
    item={{
      url: 'https://eadn-wc02-3894996.nxedge.io/wp-content/uploads/2018/01/pistachio-turmeric-rice-bowl6-1024x683.jpg',
    }}
  />
);
