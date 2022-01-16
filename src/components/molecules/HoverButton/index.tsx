import { Button } from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Text from "../../atoms/text/index"

const HoverLib=()=>{
    const useStyles=makeStyles({
        root:{
            height:"52px",
            width:"284px",
            paddingTop:"16px",
            borderLeft: "1px  solid #E1ECFC",
            borderRight: "1px  solid #E1ECFC",
            borderBottom: "1px  solid #E1ECFC",
            // borderColor: "#E1ECFC",
            marginTop:"0px",
            fontWeight:700,
            textAlign:"center"
        }
    })
    const classes=useStyles();
    return(
        <div className={classes.root}>
            <Button  variant="contained"  startIcon={<Add sx={{color:" white" , backgroundColor:"#0365F2"}}/>}>
                <Text variant={"body1"} text={"Add to library"} height={"15px"} width={"120px"} color="white"/> 
            </Button>
        </div>
    )
}
export default HoverLib