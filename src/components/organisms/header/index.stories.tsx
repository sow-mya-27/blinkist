import React from "react";
import { ComponentStory } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";
import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "organisms / Header",
  component: Header,
};
const Template: ComponentStory<typeof Header> = (args) => (
  <Router>
    <Header />
  </Router>
);

export const header = Template.bind({});
header.args = {};
