import { makeStyles } from "@mui/styles";
import React from "react";
import Text from "../../atoms/text";
const useStyles = makeStyles({
  root: {
    width: "912px",
    height: "264px",
    backgroundColor: "#F1F6F4",
    paddingLeft: "45px",
    paddingTop: "45px",
  },
  parent: { display: "flex", justifyContent: "center" },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div>
          <div className={classes.flexCol}>
            <Text
              variant={"h1"}
              text={"Explore Books on "}
              height={"35px"}
              width="300px"
            ></Text>

            <Text
              variant={"h1"}
              text={" entrepreneurship"}
              height={"35px"}
              width="300px"
            ></Text>
            <Text
              variant={"subtitle2"}
              text={
                " Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
              }
              height={"18px"}
            ></Text>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Banner;
