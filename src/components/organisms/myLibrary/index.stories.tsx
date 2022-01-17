import React from "react";
import { ComponentStory } from "@storybook/react";
import MyLibraryTemplate from ".";
export default {
  title: "organisms / MyLibraryTemplate",
  component: MyLibraryTemplate,
};
const Template: ComponentStory<typeof MyLibraryTemplate> = (args) => (
  <MyLibraryTemplate />
);

export const MyLibrarytemplate = Template.bind({});
MyLibrarytemplate.args = {};
