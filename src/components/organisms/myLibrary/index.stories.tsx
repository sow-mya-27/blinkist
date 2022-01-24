import React from "react";
import { ComponentStory } from "@storybook/react";
import MyLibraryTemplate from ".";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "organisms / MyLibraryTemplate",
  component: MyLibraryTemplate,
};

export const myLibraryTemplate = (
  <Router>
    <MyLibraryTemplate book={[]} setData={undefined} />
  </Router>
);
