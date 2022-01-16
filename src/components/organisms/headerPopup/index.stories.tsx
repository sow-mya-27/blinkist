import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeaderPopUp from ".";
export default {
  title: "atoms / HeaderPopUp",
  component: HeaderPopUp,
};
const Template: ComponentStory<typeof HeaderPopUp> = (args) => <HeaderPopUp />;

export const HeaderPopup = Template.bind({});
HeaderPopup.args = {};
