import { Typography } from "@material-ui/core";
import React from "react";
import { typographyAtomStyles } from "../../../typography";
import { ThemeProvider } from "@material-ui/core";
import { makeStyles, createStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LinearProgress from "@mui/material/LinearProgress";
type MyProps = {
  bookName: string;
  authorName: String;
  src: string;
  time: string;
  read?: string;
};
const useStyles = makeStyles({
  book: {
    height: "23px",
    // width:"225px",
    paddingTop: "23px",
    paddingLeft: "16px",
    color: "#03314B",
    fontWeight: 700,
  },
  author: {
    height: "20px",
    // width:"20px",
    paddingTop: "16px",
    paddingLeft: "16px",
    color: "#6D787E",
  },
  time: {
    height: "18px",
    paddingTop: "17px",
    color: "#6D787E",
  },
  root: {
    border: "1px  solid",
    borderColor: "#E1ECFC",
    width: "284px",
    height: "466px",
    borderRadius: "8px",
  },
});
const Card = (props: MyProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={props.src}></img>
      <ThemeProvider theme={typographyAtomStyles}>
        <Typography variant="subtitle1">
          <div className={classes.book}>{props.bookName}</div>
        </Typography>
        <Typography variant="body1">
          <div className={classes.author}>{props.authorName}</div>
        </Typography>
        <Typography variant="caption">
          <div className={classes.time}>
            <AccessTimeIcon
              sx={{ paddingLeft: "17.67px", height: "16px", width: "16px" }}
            />
            {props.time} {props.read}
          </div>
        </Typography>
        <MoreHorizIcon
          sx={{ paddingLeft: "247px", color: "#042330" }}
        ></MoreHorizIcon>
        <div
          style={{ display: "flex", paddingTop: "28px", marginBottom: "0px" }}
        >
          <div
            style={{
              backgroundColor: "#E1ECFC",
              height: "15px",
              width: "88px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#F1F6F4",
              height: "15px",
              width: "195px",
            }}
          ></div>
        </div>
      </ThemeProvider>
    </div>
  );
};
export default Card;
