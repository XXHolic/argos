import React from 'react';
import { storiesOf } from '@storybook/react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Description} from '@storybook/addon-docs/blocks';
import {Button,ButtonProps} from './Button'


export default {
  title: 'Args',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
