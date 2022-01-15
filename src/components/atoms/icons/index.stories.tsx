import Icons from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import Icons from ".";
import { Search } from "@mui/icons-material";
export default {
  title: "atoms/icons",
  component: Icons,
};

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const images = Template.bind({});
images.args = {
  src: "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png",
  height: "12px",
  width: "10.61px",
};
