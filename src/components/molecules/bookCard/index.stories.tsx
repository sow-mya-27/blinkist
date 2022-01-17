import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from ".";
export default {
  title: "molecules/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const bookCard = Template.bind({});
bookCard.args = {
  mode: "normal",
  bookName: "Bring Your Human To Work",
  authorName: "Erica Keswin",
  src: "https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1642982400&Signature=YIGs8Fdj2wndO~2CKQe-Z4G1EtbtJTkgzVwM1h~vVEFGWlAMBMkPOec6hYoq943tXF7xIR0-nmBZi6JQeBMtTuQA5vftNwbewAqEm4vlaZFI4emPmrzsEUAONAMOW5rQQ~Pmo5SuD0rpBtCyCCKIZGqKRO1ae1NVAjh~vt2~R~2Gd8FB79c73A6kOCmHkPyTl7bVIv0tfqxZbczcYU1PFzWE5p-XG9NZK7lg99EAYuk8hyN8eskVSGLcQjeLh1qMMupFtZ44iNfBxo2cUIbPcw1BjUx4c-gXzZ5l3f6~fNuqTDxYqFObYFiKb~9WvTGxBiO4PzLiMXnCx2CfX0fwQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  time: "13-minute read ",
  read: "",
  status: false,
  // read:"  16k reads",
};
