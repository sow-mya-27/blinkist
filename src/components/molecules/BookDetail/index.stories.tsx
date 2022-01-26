import React from "react";
import { ComponentStory } from "@storybook/react";
import Details from ".";
export default {
  title: "molecules / Details",
  component: Details,
};
const Template: ComponentStory<typeof Details> = (args) => (
  <Details
    book={[]}
    setData={undefined}
    src={"assets/biggboss.png"}
    bookName={"Being Boss"}
    authorName={"Kathleen Shannon and Emily..."}
    timeStamp={"13-minute read"}
  />
);

export const details = Template.bind({});
details.args = {};
