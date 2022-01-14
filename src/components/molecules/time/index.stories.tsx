import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Time from "./index";
export default {
  title: "atoms / text",
  component: Time,
};
const Template: ComponentStory<typeof Time> = (args) => <Time {...args} />;

export const time = <Time></Time>;
