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
    },
    body: {
      backgroundColor: "#F1F6F4",
      height: "370px",
      width: "950px",
      paddingTop: "38px",
    },
    body1: {
      color: "solid black",
      paddingTop: "38px",
      fontWeight: 700,
    },
    gamma: {
      paddingTop: "48px",
      paddingLeft: "50px",
      color: "#6D787E",
    },
    parent: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F1F6F4",
      marginTop: "50px",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.parent}>
      <div className={classes.body}>
        <div className={classes.flex}>
          <div>
            <Image
              src="../../../../logo.png"
              height={100}
              width={124.09}
            ></Image>
            <div style={{ color: "#0365F2", fontWeight: 500 }}>
              <Text
                //   variant="subtit  le1"
                text={"Big ideas in small packages "}
                height={"24px"}
                variant={"subtitle3Blue"}
                color="#0365F2"
              ></Text>
            </div>
            <div style={{ color: "#0365F2", fontWeight: 500 }}>
              <Text
                //   variant="subtit  le1"
                text={" Start learning now"}
                height={"24px"}
                variant={"subtitle3Blue"}
                color="#0365F2"
              ></Text>
            </div>
          </div>
          <div>
            <div className={classes.body1}>
              <Text variant={"body1"} text={"Editorial"} height={"16px"}></Text>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <Text
                variant={"body2"}
                text={"Book Lists"}
                height={"16px"}
              ></Text>
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
              <Text
                variant={"body2"}
                text={"Gift cards"}
                height={"16px"}
              ></Text>
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
