import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    position: "relative",
    margin: "0",
  },
  header: {
    position: "absolute",
    height: "86px",
    width: "100%",
  },
  body: {
    marginTop: "86px",
    height: "100%",
    width: "100%",

  },
});
type MyProps = {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};
const HomePageTemplate = (props: MyProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>{props.header}</div>
      <div className={classes.body}>
        <div>{props.body}</div>
        <div>{props.footer}</div>
      </div>
    </div>
  );
};
export default HomePageTemplate;