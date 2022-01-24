import React from "react";
import { ComponentStory } from "@storybook/react";
import BookDetailPage from ".";
export default {
  title: "pages / BookDetailPage",
  component: BookDetailPage,
};
const Template: ComponentStory<typeof BookDetailPage> = (args) => (
  <BookDetailPage book={[]} setData={undefined} />
);

export const bookDetailPage = Template.bind({});
bookDetailPage.args = {};
