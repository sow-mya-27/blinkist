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
  src: <Search></Search>,
  height: "20.31px",
  width: "20.31px",
};
