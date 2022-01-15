import React from "react";
import IconButton from "@material-ui/core/IconButton";

type MyProps = { src: string; height: string; width: string };
const Icons = (props: MyProps) => {
  const styles = {
    height: props.height,
    width: props.width,
  };
  console.log(props.height);
  return <img src={props.src} height={props.height} width={props.width} />;
};
export default Icons;
