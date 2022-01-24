import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from ".";
export default {
  title: "atoms / images",
  component: Image,
};
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const images = Template.bind({});
images.args = {
  src: "../../public/assets/logo.png",
  height: 100,
  width: 124.09,
};
