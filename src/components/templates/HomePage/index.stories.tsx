import React from 'react';
import { ComponentStory } from '@storybook/react';
import HomePageTemplate from '.';

export default {
  title: 'template / HomePage',
  component: HomePageTemplate,
};
const Template: ComponentStory<typeof HomePageTemplate> = (args) => (
  <HomePageTemplate {...args} />
);

export const Mylibrary = Template.bind({});
Mylibrary.args = {
  header: (
    <div style={{ backgroundColor: 'red', height: '100%' }}>
      header
    </div>
  ),
  body: (
    <div style={{ backgroundColor: 'green', height: '100%' }}>
      body
    </div>
  ),
  footer: (
    <div style={{ backgroundColor: 'yellow', height: '100%' }}>
      footer
    </div>
  ),
};
