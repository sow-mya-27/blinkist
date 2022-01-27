import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";
import { typographyAtomStyles } from "../../../typography";
import { makeStyles } from "@mui/styles";
import Typographys from "../typography/Typographys"

type MyProps = {
  variant: any;
  text: string;
  height?: string;
  width?: string;
  color?: string;
  hover?:string
  
};
const Text = (props: MyProps) => {
  const useStyles = makeStyles({
    root: { fontSize: props.height, width: props.width, color: props.color ,fontFamily:"cursive"},
  });
  const root={
     width: props.width, color: props.color ,fontFamily:"cursive","&:hover":{color:props.hover}}
  const classes = useStyles();
  return (
    <div id="text" className={classes.root}>
      {/* <ThemeProvider theme={typographyAtomStyles}>
        <Typography className={classes.root} variant={props.variant}> */}
          
      <Typographys  variant={props.variant} content={props.text} ></Typographys>
        {/* </Typography>
      </ThemeProvider> */}
      {/* <Typographys variant={props.variant} content={props.text}></Typographys> */}
    </div>
  );
};
export default Text;
