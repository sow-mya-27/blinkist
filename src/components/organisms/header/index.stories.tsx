import React from "react";
import { ComponentStory } from "@storybook/react";
import Header from ".";
export default {
  title: "organisms / Header",
  component: Header,
};
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const header = Template.bind({});
header.args = {};
