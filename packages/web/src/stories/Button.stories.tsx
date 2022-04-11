// Button.stories.js|jsx|ts|tsx
import App from '@pengepantry/core'
const Button = () => <button>Hello</button>
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

const Template = (args: any) => ({
  //👇 Your template goes here
});

export const Primary = () => <App />
