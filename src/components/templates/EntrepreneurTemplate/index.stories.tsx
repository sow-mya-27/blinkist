import React from 'react';
import { ComponentStory } from '@storybook/react';
import EntrepreneurTemplate from '.';

export default {
  title: 'template / HomePage',
  component: EntrepreneurTemplate,
};
const Template: ComponentStory<typeof EntrepreneurTemplate> = (
  args,
) => <EntrepreneurTemplate {...args} />;

export const Mylibrary = Template.bind({});
Mylibrary.args = {
  header: (
    <div style={{ backgroundColor: 'red', height: '100%' }}>
      header
    </div>
  ),
  body: (
    <div style={{ backgroundColor: 'black', height: '100%' }}>
      body
    </div>
  ),
  footer: (
    <div style={{ backgroundColor: 'yellow', height: '100%' }}>
      footer
    </div>
  ),
};
