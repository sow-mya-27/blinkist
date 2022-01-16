import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NonHoverLib from ".";
export default {
  title: "atoms / nonHoverLib",
  component: NonHoverLib,
};
const Template: ComponentStory<typeof NonHoverLib> = (args) => <NonHoverLib />;

export const nonHoverLib = Template.bind({});
nonHoverLib.args = {};
