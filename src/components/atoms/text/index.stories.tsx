import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from ".";
export default {
  title: "atoms / text",
  component: Text,
};
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const images = Template.bind({});
images.args = {
  variant: "h1",
  text: "My Library",
  height: "45px",
  // width: "178px",
};