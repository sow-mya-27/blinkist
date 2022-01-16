import { makeStyles } from "@mui/styles";
import React from "react";
import Text from "../../atoms/text";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

const HeaderPopUp = () => {
  const useStyles = makeStyles({
    flex: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    flexCol: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.flex}>
        <Text
          variant={"subtitle"}
          text={"Explore by category"}
          height={"16px"}
          width="188px"
        ></Text>
        <Text
          variant={undefined}
          text={"See recently added titles"}
          height={"16px"}
          width={"188px"}
        ></Text>
        <Text
          variant={undefined}
          text={"See popular titles"}
          height={"16px"}
          width={"188px"}
        ></Text>
      </div>
      <br />
      <hr
        style={{
          width: "70%",
          color: "solid #042330",
        }}
      />
      <div className={classes.flex}>
        <div className={classes.flexCol}>
          <Button variant="text" startIcon={<RocketOutlinedIcon />}>
            Entrepreneurship
          </Button>
          <Button variant="text" startIcon={<ScienceOutlinedIcon />}>
            Science
          </Button>
          <Button variant="text" startIcon={<FontAwesomeIcon icon={faGlobe} />}>
            Economics
          </Button>
          <Button variant="text" startIcon={<BusinessCenterOutlinedIcon />}>
            Corporate Culture
          </Button>
          <Button variant="text" startIcon={<PsychologyOutlinedIcon />}>
            Psychology
          </Button>
          <Button
            variant="text"
            startIcon={<FontAwesomeIcon icon={faLeaf} size="2x" />}
          >
            Nature & Environment
          </Button>
        </div>
        <div className={classes.flexCol}>
          <Button
            variant="text"
            startIcon={<FontAwesomeIcon icon={faLandmark} />}
          >
            Politics
          </Button>
          <Button
            variant="text"
            startIcon={<FontAwesomeIcon icon={faHospital} />}
          >
            Health & Nutrition
          </Button>
          <Button variant="text" startIcon={<FontAwesomeIcon icon={faGlobe} />}>
            History
          </Button>
          <Button variant="text" startIcon={<BusinessCenterOutlinedIcon />}>
            Motivation & Inspiration
          </Button>
          <Button variant="text" startIcon={<PsychologyOutlinedIcon />}>
            Productivity
          </Button>
          <Button
            variant="text"
            startIcon={<FontAwesomeIcon icon={faLeaf} size="2x" />}
          >
            Career & Success
          </Button>
        </div>

        <div className={classes.flexCol}>
          <Button variant="text" startIcon={<RocketOutlinedIcon />}>
            Marketing & Sales
          </Button>
          <Button variant="text" startIcon={<ScienceOutlinedIcon />}>
            Personal Development
          </Button>
          <Button variant="text" startIcon={<FontAwesomeIcon icon={faGlobe} />}>
            Communication Skills
          </Button>
          <Button variant="text" startIcon={<BusinessCenterOutlinedIcon />}>
            Money & Investments
          </Button>
          <Button variant="text" startIcon={<PsychologyOutlinedIcon />}>
            Sex & Relationship
          </Button>
          <Button
            variant="text"
            startIcon={<FontAwesomeIcon icon={faLeaf} size="2x" />}
          >
            Education
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HeaderPopUp;
