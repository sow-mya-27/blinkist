import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Icons from "../../atoms/icons";
import Text from "../../atoms/text";
import { AccessTime } from "@mui/icons-material";
import { makeStyles } from "@mui/material";

type MyProps = {};
const Time = (props: MyProps) => {
  const node = <AccessTimeIcon></AccessTimeIcon>;

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
