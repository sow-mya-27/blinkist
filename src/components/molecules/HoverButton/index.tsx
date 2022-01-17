import { Button } from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
// import React from "react";
import Text from "../../atoms/text/index";

const HoverLib = () => {
  const useStyles = makeStyles({
    root: {
      paddingTop: "16px",
      // borderColor: "#E1ECFC",
      textAlign: "center",
    },
    buttonStyle: {
      height: "52px",
      width: "284px",
      backgroundColor: "#0365F2",
      padding: "18px 36px",
      fontSize: "18px",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.buttonStyle}
        variant="contained"
        startIcon={<Add sx={{ color: " white" }} />}
      >
        <Text
          variant={"body1"}
          text={"Add to library"}
          height={"15px"}
          width={"120px"}
          color="white"
        />
      </Button>
    </div>
  );
};
export default HoverLib;
