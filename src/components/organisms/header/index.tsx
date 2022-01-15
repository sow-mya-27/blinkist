import React, { useState } from "react";
import Image from "../../atoms/images";
import SearchIcon from "@mui/icons-material/Search";
import Text from "../../atoms/text";
import Icons from "../../atoms/icons";
import Button from "@mui/material/Button";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { typographyAtomStyles } from "../../../typography";
const Header = () => {
  const [click, setClick] = useState(false);
  const useStyles = makeStyles({
    root: { display: "flex", justifyContent: "space-around" },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          width: "70vw",
          marginLeft: "0px",
          paddingTop: "33px",
        }}
      >
        <Image
          src="https://s3-alpha-sig.figma.com/img/1998/167b/ad306203f1382b0f687724d96c675969?Expires=1642982400&Signature=QenNZONknrFbgSSvB6KCId2kRNgJCWMeQ0lGvhOc5YRdNNeo47hZiHBvqGN4UcC33RrjuqTxLi1KGHYMMnEHaYOFLOc71vMyFH1VDvZYbEwa5pTxzfMi~1pzFfOGB7aOj9q5mKwyNaj9osBmHmMxjiLdvWPLnhnAaT4wWnWa9j~L69XTvt-BzLF7y779--67GVSjgo2vHS2-Ri9RoT1uM45uzYAfZcjs-qTs22uBit0-KlE7yn8qEiPpeg3lXOXe7fZaPq3PmtIXrONXZWcyyNl9E7zFmmwk9sLwI9W5nSuFo4k1bFFeq6RqMZ1PCaEPlnOlUufbNkY5ZsP0Ikh03A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          height={100}
          width={124.09}
        ></Image>
        <div style={{ paddingLeft: "42.9px", paddingTop: "40px" }}>
          <SearchIcon></SearchIcon>
        </div>
        <div style={{ paddingLeft: "42.9px", paddingTop: "29px" }}>
          <ThemeProvider theme={typographyAtomStyles}>
            <Button
              variant="text"
              startIcon={
                <Icons
                  src={
                    "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png"
                  }
                  height={"13px"}
                  width={"12px"}
                ></Icons>
              }
              onClick={() => setClick(true)}
            >
              <div style={{ color: "black" }}>
                <Text variant={"body1"} text={"Explore"} height={"16px"}></Text>
              </div>
            </Button>
          </ThemeProvider>
        </div>
        <div style={{ paddingLeft: "42.9px", paddingTop: "33px" }}>
          <Text variant={"body1"} text={"My Library"} height={"16px"}></Text>
        </div>
      </div>
      <ThemeProvider theme={typographyAtomStyles}>
        <div style={{ paddingTop: "43px" }}>
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
      </ThemeProvider>
    </div>
  );
};
export default Header;
