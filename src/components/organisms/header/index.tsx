import React, { useState } from "react";
import Image from "../../atoms/images";
import SearchIcon from "@mui/icons-material/Search";
import Text from "../../atoms/text";
import Icons from "../../atoms/icons";
import Button from "@mui/material/Button";
// import { Icon } from "@material-ui/core";
// import { makeStyles, ThemeProvider } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { HeaderPopup } from "../headerPopup/index.stories";
// import { typographyAtomStyles } from "../../../typography";
// import HeaderPopUp from "../headerPopup";
// const Header = () => {
//   const [click, setClick] = useState(false);
//   const useStyles = makeStyles({
//     root: {
//       display: "flex",
//       justifyContent: "space-around",
//       height: "86px",
//       alignItems: "center",
//       position: "relative",
//       width: "1440px",
//     },
//     innerdiv: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginLeft: "0px",

//       width: "591px",
//     },

//     main: {
//       display: "flex",
//       flexDirection: "column",
//     },
//   });
//   const classes = useStyles();
//   const icon1 = (
//     <Icons
//       src={
//         "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png"
//       }
//       height={"13px"}
//       width={"12px"}
//     ></Icons>
//   );
//   const icon2 = (
//     <Icons
//       src={"https://pic.onlinewebfonts.com/svg/img_185276.png"}
//       height={"5px"}
//       width={"10px"}
//     ></Icons>
//   );
//   if (click) {
//     const comp = <HeaderPopUp />;
//   }
//   return (
//     <div className={classes.main}>
//       <div className={classes.root}>
//         <div className={classes.innerdiv}>
//           <Image
//             src="https://s3-alpha-sig.figma.com/img/1998/167b/ad306203f1382b0f687724d96c675969?Expires=1642982400&Signature=QenNZONknrFbgSSvB6KCId2kRNgJCWMeQ0lGvhOc5YRdNNeo47hZiHBvqGN4UcC33RrjuqTxLi1KGHYMMnEHaYOFLOc71vMyFH1VDvZYbEwa5pTxzfMi~1pzFfOGB7aOj9q5mKwyNaj9osBmHmMxjiLdvWPLnhnAaT4wWnWa9j~L69XTvt-BzLF7y779--67GVSjgo2vHS2-Ri9RoT1uM45uzYAfZcjs-qTs22uBit0-KlE7yn8qEiPpeg3lXOXe7fZaPq3PmtIXrONXZWcyyNl9E7zFmmwk9sLwI9W5nSuFo4k1bFFeq6RqMZ1PCaEPlnOlUufbNkY5ZsP0Ikh03A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
//             height={100}
//             width={124.09}
//           ></Image>
//           <div>
//             <SearchIcon></SearchIcon>
//           </div>
//           <div>
//             <Button
//               variant="text"
//               onClick={() => {
//                 click ? setClick(false) : setClick(true);
//               }}
//               startIcon={click ? icon2 : icon1}
//             >
//               <Text
//                 variant={"body1"}
//                 text={"explore"}
//                 height={"16px"}
//                 color="black"
//               ></Text>
//             </Button>
//           </div>
//           <Text variant={"body1"} text={"My Library"} height={"16px"}></Text>
//         </div>
//         <ThemeProvider theme={typographyAtomStyles}>
//           <div>
//             <Fab size="small" color="primary">
//               <div style={{ color: "white" }}>A</div>
//             </Fab>
//             <Icons
//               src={
//                 "https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png"
//               }
//               height={"13px"}
//               width={"12px"}
//             ></Icons>
//           </div>
//         </ThemeProvider>
//       </div>{" "}
//       {click ? <HeaderPopUp /> : <div></div>}
//     </div>
//   );
// };
// export default Header;

const Header = () => {
  const [click, setClick] = useState(false);
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
      width: "1440px",
      height: "86px",
      justifyContent: "space-around",
    },
    innerDiv: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "591px",
    },
    parent: { display: "flex", justifyContent: "center", paddingLeft: "100px" },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.root}>
          <div className={classes.innerDiv}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/1998/167b/ad306203f1382b0f687724d96c675969?Expires=1642982400&Signature=QenNZONknrFbgSSvB6KCId2kRNgJCWMeQ0lGvhOc5YRdNNeo47hZiHBvqGN4UcC33RrjuqTxLi1KGHYMMnEHaYOFLOc71vMyFH1VDvZYbEwa5pTxzfMi~1pzFfOGB7aOj9q5mKwyNaj9osBmHmMxjiLdvWPLnhnAaT4wWnWa9j~L69XTvt-BzLF7y779--67GVSjgo2vHS2-Ri9RoT1uM45uzYAfZcjs-qTs22uBit0-KlE7yn8qEiPpeg3lXOXe7fZaPq3PmtIXrONXZWcyyNl9E7zFmmwk9sLwI9W5nSuFo4k1bFFeq6RqMZ1PCaEPlnOlUufbNkY5ZsP0Ikh03A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              height={1}
              width={124.09}
            ></Image>
            <SearchIcon></SearchIcon>
            <Button
              onClick={() => (click ? setClick(false) : setClick(true))}
              startIcon={click ? icondown : iconup}
            >
              <Text
                variant={"body1"}
                text={"Explore"}
                height={"16px"}
                color="black"
              />
            </Button>
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
      {click ? <HeaderPopup /> : <div></div>}
    </div>
  );
};
export default Header;
