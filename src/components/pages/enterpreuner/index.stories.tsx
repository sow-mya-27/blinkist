import React from "react";
import { ComponentStory } from "@storybook/react";
import MyLibrary from ".";
export default {
  title: "pages / MyLibrary",
  component: MyLibrary,
};
const Template: ComponentStory<typeof MyLibrary> = (args) => (
  <MyLibrary book={[]} setData={undefined} />
);

export const Mylibrary = Template.bind({});
Mylibrary.args = {};