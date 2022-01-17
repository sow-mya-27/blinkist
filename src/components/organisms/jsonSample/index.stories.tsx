import React from "react";
import { ComponentStory } from "@storybook/react";
import JsonSample from ".";
export default {
  title: "organisms / JsonSample",
  component: JsonSample,
};
const Template: ComponentStory<typeof JsonSample> = (args) => (
  <JsonSample />
);

export const jsonSample = Template.bind({});
jsonSample.args = {};
