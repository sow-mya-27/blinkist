import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyLibraryTemplate from ".";
export default {
  title: "atoms / MyLibraryTemplate",
  component: MyLibraryTemplate,
};
const Template: ComponentStory<typeof MyLibraryTemplate> = (args) => <MyLibraryTemplate />;

export const MyLibrarytemplate = Template.bind({});
MyLibrarytemplate.args = {};
