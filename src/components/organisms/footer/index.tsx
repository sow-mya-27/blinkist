import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "../../atoms/images";
import Text from "../../atoms/text";
const Footer = () => {
  const useStyles = makeStyles({
    flex: {
      display: "flex",
      justifyContent: "space-around",
      alignContent: "flex-start",
      paddingLeft: "220px",
      paddingRight:"190px"
    },
    body: {
      backgroundColor: "#F1F6F4",
      height: "370px",
      width: "1440px",
      paddingTop: "38px",
    },
    body1: {
      color: "solid black",
      paddingTop: "38px",
      fontWeight: 700,
    },
    gamma: {
      paddingTop: "48px",
      paddingLeft: "200px",
      color: "#6D787E",
    },
    parent:{display:"flex",justifyContent:"center"}

  });
  const classes = useStyles();
  return (
    <div className={classes.parent}>
    <div className={classes.body}>
      <div className={classes.flex}>
        <div>
          <Image
            src="https://s3-alpha-sig.figma.com/img/1998/167b/ad306203f1382b0f687724d96c675969?Expires=1642982400&Signature=QenNZONknrFbgSSvB6KCId2kRNgJCWMeQ0lGvhOc5YRdNNeo47hZiHBvqGN4UcC33RrjuqTxLi1KGHYMMnEHaYOFLOc71vMyFH1VDvZYbEwa5pTxzfMi~1pzFfOGB7aOj9q5mKwyNaj9osBmHmMxjiLdvWPLnhnAaT4wWnWa9j~L69XTvt-BzLF7y779--67GVSjgo2vHS2-Ri9RoT1uM45uzYAfZcjs-qTs22uBit0-KlE7yn8qEiPpeg3lXOXe7fZaPq3PmtIXrONXZWcyyNl9E7zFmmwk9sLwI9W5nSuFo4k1bFFeq6RqMZ1PCaEPlnOlUufbNkY5ZsP0Ikh03A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            height={100}
            width={124.09}
          ></Image>
          <div style={{ color: "#0365F2", fontWeight: 500 }}>
            <Text
              //   variant="subtit  le1"
              text={"Big ideas in small packages "}
              height={"24px"}
              variant={"subtitle2"}
            ></Text>
          </div>
          <div style={{ color: "#0365F2", fontWeight: 500 }}>
            <Text
              //   variant="subtit  le1"
              text={" Start learning now"}
              height={"24px"}
              variant={"subtitle2"}
            ></Text>
          </div>
        </div>
        <div>
          <div className={classes.body1}>
            <Text variant={"body1"} text={"Editorial"} height={"16px"}></Text>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Text variant={"body2"} text={"Book Lists"} height={"16px"}></Text>
            <Text
              variant={"body2"}
              text={"What is Nonfiction?"}
              height={"16px"}
            ></Text>
            <Text
              variant={"body2"}
              text={"What to read next?"}
              height={"16px"}
            ></Text>
            <Text
              variant={"body2"}
              text={"Benefits of reading"}
              height={"16px"}
            ></Text>
          </div>
        </div>
        <div>
          <div className={classes.body1}>
            <Text
              variant={"body1"}
              text={"Useful links"}
              height={"16px"}
            ></Text>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Text variant={"body2"} text={"Pricing"} height={"16px"}></Text>
            <Text
              variant={"body2"}
              text={"Blinkist Business"}
              height={"16px"}
            ></Text>
            <Text variant={"body2"} text={"Gift cards"} height={"16px"}></Text>
            <Text
              variant={"body2"}
              text={"Blinkist maganine"}
              height={"16px"}
            ></Text>
            <Text
              variant={"body2"}
              text={"Contact & help"}
              height={"16px"}
            ></Text>
          </div>
        </div>
        <div>
          <div className={classes.body1}>
            <Text variant={"body1"} text={"Company"} height={"16px"}></Text>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Text variant={"body2"} text={"About"} height={"16px"}></Text>
            <Text variant={"body2"} text={"Careers"} height={"16px"}></Text>
            <Text variant={"body2"} text={"partners"} height={"16px"}></Text>
            <Text
              variant={"body2"}
              text={"Code of Conduct"}
              height={"16px"}
            ></Text>
          </div>
        </div>
      </div>
      <div className={classes.gamma}>
        <Text
          variant={"caption"}
          text={
            "© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies"
          }
          height={"14px"}
        ></Text>
      </div>
    </div>
    </div>
  );
};
export default Footer;
