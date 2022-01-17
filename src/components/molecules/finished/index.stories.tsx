import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Finished from ".";
export default {
  title: "molecules / nonHoverLib",
  component: Finished,
};
const Template: ComponentStory<typeof Finished> = (args) => <Finished />;

export const finished = Template.bind({});
finished.args = {};
