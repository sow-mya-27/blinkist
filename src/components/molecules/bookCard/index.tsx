import React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LinearProgress from "@mui/material/LinearProgress";
import Text from "../../atoms/text/index"
type MyProps = {
  bookName: string;
  authorName: string;
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
    display:"flex"
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
        <div className={classes.book}>
        <Text variant="subtitle1" text={props.bookName} height={"16px"} color="#03314B"/></div>
        <div className={classes.author}><Text variant="body1" text={props.authorName} height={"16px"}/></div>
        <div className={classes.time}>
            <AccessTimeIcon
              sx={{ paddingLeft: "17.67px", height: "16px", width: "16px" }}
            />
            <Text variant=""  text={props.time} height={"16px"}/> {props.read}
          </div>
        <MoreHorizIcon
          sx={{ paddingLeft: "247px", color: "#042330" }}
        ></MoreHorizIcon>
        
    </div>
  );
};
export default Card;
