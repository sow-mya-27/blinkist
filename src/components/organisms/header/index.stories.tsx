import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from ".";
export default {
  title: "atoms / Header",
  component: Header,
};
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const header = Template.bind({});
header.args = {};
