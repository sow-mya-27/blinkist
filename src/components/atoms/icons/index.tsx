import React from "react";
import IconButton from "@material-ui/core/IconButton";

type MyProps = { src: React.ReactNode; height: string; width: string };
const Icons = (props: MyProps) => {
  const styles = {
    height: props.height,
    width: props.width,
  };
  console.log(props.height);
  return <IconButton style={styles}>{props.src}</IconButton>;
};
export default Icons;
