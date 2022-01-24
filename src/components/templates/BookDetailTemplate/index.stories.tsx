import React from "react";
import { ComponentStory } from "@storybook/react";
import BookDetailTemplate from ".";

export default {
  title: "template / HomePage",
  component: BookDetailTemplate,
};
const Template: ComponentStory<typeof BookDetailTemplate> = (args) => (
  <BookDetailTemplate {...args} />
);

export const bookDetailTemplate = Template.bind({});
bookDetailTemplate.args = {
  header: <div style={{ backgroundColor: "red", height: "100%" }}>header</div>,
  body: <div style={{ backgroundColor: "black", height: "100%" }}>body</div>,
  footer: (
    <div style={{ backgroundColor: "yellow", height: "100%" }}>footer</div>
  ),
};
