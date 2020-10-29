import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
const Argos = require('../../example/args.js');
Argos.init({
  url: 'http://localhost:6006/'
});


export default {
  title: 'HTML/exception',
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = ({ onClick, children }) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = children;
  btn.addEventListener('click', onClick);
  return btn;
};

// export const Text = Template.bind({});
// Text.args = {
//   children: 'Button',
//   onClick: action('onClick'),
// };

// export const Emoji = Template.bind({});
// Emoji.args = {
//   children: '😀 😎 👍 💯',
// };

export const TextWithAction = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'throw exception';
  btn.addEventListener('click', () => {
    throw new Error('Regular exception');
  });
  return btn;
};

TextWithAction.storyName = 'Normal Exception';
// TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

// export const ButtonWithLinkToAnotherStory = () => {
//   const btn = document.createElement('button');
//   btn.type = 'button';
//   btn.innerText = 'Go to Welcome Story';
//   btn.addEventListener('click', linkTo('example-introduction--page'));
//   return btn;
// };

// ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
