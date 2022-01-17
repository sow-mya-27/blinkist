import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ReadAgain from ".";
export default {
  title: "molecules / nonHoverLib",
  component: ReadAgain,
};
const Template: ComponentStory<typeof ReadAgain> = (args) => <ReadAgain />;

export const readAgain = Template.bind({});
readAgain.args = {};
