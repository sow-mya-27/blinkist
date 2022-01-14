import React from "react";
type MyProps = {
  src: string;
  height: number;
  width: number;
};
const Image = (props: MyProps) => {
  const styles = {
    height: props.height,
    width: props.width,
  };
  console.log(props.width);
  return <img src={props.src} style={styles}></img>;
};
export default Image;
