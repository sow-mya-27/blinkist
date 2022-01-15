import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";
import { typographyAtomStyles } from "../../../typography";
import { makeStyles } from "@mui/material";
import { style } from "@mui/system";

type MyProps = { variant: any; text: string; height: string; width?: string };
const Text = (props: MyProps) => {
  const styles = {
    fontSize: props.height,
    width: props.width,
  };
  return (
    <ThemeProvider theme={typographyAtomStyles}>
      <Typography variant={props.variant}>
        <div style={styles}>{props.text}</div>
      </Typography>
    </ThemeProvider>
  );
};
export default Text;
