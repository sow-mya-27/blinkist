import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HoverLib from ".";
export default {
  title: "atoms / HoverLib",
  component: HoverLib,
};
const Template: ComponentStory<typeof HoverLib> = (args) => <HoverLib />;

export const hoverLib = Template.bind({});
hoverLib.args = {};
