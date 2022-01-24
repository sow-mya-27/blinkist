import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";
import { typographyAtomStyles } from "../../../typography";
import { makeStyles } from "@mui/styles";

type MyProps = {
  variant: any;
  text: string;
  height: string;
  width?: string;
  color?: string;
};
const Text = (props: MyProps) => {
  const useStyles = makeStyles({
    root: { fontSize: props.height, width: props.width, color: props.color },
  });
  const classes = useStyles();
  return (
    <div id="text">
      <ThemeProvider theme={typographyAtomStyles}>
        <Typography className={classes.root} variant={props.variant}>
          {props.text}
        </Typography>
      </ThemeProvider>
    </div>
  );
};
export default Text;
