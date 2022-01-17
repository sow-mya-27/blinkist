import { Button } from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Text from "../../atoms/text/index";

const NonHoverLib = () => {
  const useStyles = makeStyles({
    root: {
      height: "52px",
      width: "284px",
      border: "1px  solid #E1ECFC",
      textAlign: "center",
      backgroundColor: "white",
      color: "#0365F2",
      "&:hover": {
        backgroundColor: "#0365F2",

        color: "white",
      },
    },
    buttonStyle: {
      height: "52px",
      width: "284px",
      padding: "14px 24px",
      fontSize: "18px",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.buttonStyle}
        variant="text"
        startIcon={<Add></Add>}
      >
        <Text
          variant={"body1"}
          text={"Add to library"}
          height={"15px"}
          width={"120px"}
        />
      </Button>
    </div>
  );
};
export default NonHoverLib;
