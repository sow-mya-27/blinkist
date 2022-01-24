import React from "react";
import { ComponentStory } from "@storybook/react";
import Details from ".";
export default {
  title: "organisms / Details",
  component: Details,
};
const Template: ComponentStory<typeof Details> = (args) => (
  <Details
    book={undefined}
    setData={undefined}
    src={""}
    bookName={""}
    authorName={""}
    timeStamp={"undefined"}
  />
);

export const details = Template.bind({});
details.args = {};
