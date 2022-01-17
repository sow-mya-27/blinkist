import React from "react";
import { ComponentStory } from "@storybook/react";
import HeaderPopUp from ".";
export default {
  title: "organisms / HeaderPopUp",
  component: HeaderPopUp,
};
const Template: ComponentStory<typeof HeaderPopUp> = (args) => <HeaderPopUp />;

export const HeaderPopup = Template.bind({});
HeaderPopup.args = {};
