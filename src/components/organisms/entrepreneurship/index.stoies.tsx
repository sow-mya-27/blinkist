import React from "react";
import { ComponentStory } from "@storybook/react";
import Entrepreneurship from ".";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "organisms / Entrepreneurship",
  component: Entrepreneurship,
};
const Template: ComponentStory<typeof Entrepreneurship> = (args) => (
  <Entrepreneurship />
);

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {};
