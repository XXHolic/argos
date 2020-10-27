import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Description} from '@storybook/addon-docs/blocks';
import {Button,ButtonProps} from './Button'


export default {
  title: 'React Args',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Test = Template.bind({});
Test.args = {
  primary: true,
  label: 'Try React Error',
  onClick: ()=>{
    console.info('primary Button')
    throw new Error(`primary Button`);
  }
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
