import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Normal from ".";
export default {
  title: "atoms / nonHoverLib",
  component: Normal,
};
const Template: ComponentStory<typeof Normal> = (args) => <Normal />;

export const normal = Template.bind({});
normal.args = {};
