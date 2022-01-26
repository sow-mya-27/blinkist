import React, { useState } from "react";
import Image from "../../atoms/images";
import SearchIcon from "@mui/icons-material/Search";
import Text from "../../atoms/text";
import Icons from "../../atoms/icons";
import Button from "@mui/material/Button";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import HeaderPopUp from "../headerPopup/index";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const iconup = (
    <Icons
      src={
        "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png"
      }
      height={"13px"}
      width={"12px"}
    ></Icons>
  );
  const icondown = (
    <Icons
      src={"https://pic.onlinewebfonts.com/svg/img_185276.png"}
      height={"5px"}
      width={"10px"}
    ></Icons>
  );
  const useStyles = makeStyles({
    root: {
      display: "flex",
      width: "100vw",
      height: "86px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    innerDiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "422px",
    },
    parent: {
      display: "flex",
      justifyContent: "center",
    },
    child: {
      display: "flex",
      justifyContent: "space-between",
      width: "920px",
      alignItems: "center",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.root}>
          <div className={classes.child}>
            <div className={classes.innerDiv}>
              <div onClick={() => navigate("/")}>
                <Image
                  height={100}
                  width={124.09}
                  src={"../../../../logo.png"}
                ></Image>
              </div>
              <SearchIcon></SearchIcon>
              <div
                style={{
                  display: "flex",
                  width: "70px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => (click ? setClick(false) : setClick(true))}
              >
                <Text
                  variant={"body1"}
                  text={"Explore"}
                  height={"16px"}
                  color="black"
                />
                {click ? icondown : iconup}
              </div>
              <Text
                variant={"body1"}
                text={"My Library"}
                height={"16px"}
                color="black"
              />
            </div>
            <div>
              <Fab size="small" color="primary">
                <div style={{ color: "white" }}>A</div>
              </Fab>
              <Icons
                src={
                  "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png"
                }
                height={"13px"}
                width={"12px"}
              ></Icons>
            </div>
          </div>
        </div>
      </div>
      {click ? <HeaderPopUp /> : <div></div>}
    </div>
  );
};
export default Header;
