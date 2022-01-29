import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailOrganism from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'organisms / BookDetailOrganism',
  component: BookDetailOrganism,
};

const template: ComponentStory<typeof BookDetailOrganism> = (
  args,
) => (
  <Router>
    <BookDetailOrganism {...args} />
  </Router>
);
export const bookDetailOrganism = template.bind({});
bookDetailOrganism.args = {
  book: [],
  setData: { undefined },
};
// export const bookDetailOrganism = (

// <Router>
//   <BookDetailOrganism book={[]} setData={undefined} />
// </Router>
