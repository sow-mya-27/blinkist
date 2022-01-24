import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Text from "../../atoms/text";
import { AccessTime } from "@mui/icons-material";

type MyProps = {};
const Time = (props: MyProps) => {
  return (
    <div>
      <AccessTime></AccessTime>
      <Text
        variant={"caption"}
        text={"13-minute read"}
        height={"18px"}
        width={"96px"}
      ></Text>
    </div>
  );
};
export default Time;
