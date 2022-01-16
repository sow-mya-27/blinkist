import { Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

const Normal=()=>{
    const useStyles=makeStyles({
        flex:{display:"flex"},
  first:{
    width:"30%",
    height:"15px",
    backgroundColor:"#E1ECFC"
  },
  second:{
    width:"70%",
    height:"15px",
    backgroundColor:"#F1F6F4"
  }
    })
    const classes=useStyles();
    return(
        <div>
    <MoreHorizIcon
          sx={{ paddingLeft: "247px", color: "#042330" }}
        ></MoreHorizIcon>
        <div className={classes.flex}>
          <div className={classes.first}></div>
          <div className={classes.second}></div>
        </div>
  </div>
    )
}
export default Normal