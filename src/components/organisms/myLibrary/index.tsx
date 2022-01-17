import { makeStyles } from "@mui/styles";
import React from "react";
import { Data } from "../../../data/cardData/index";
import BookCard from "../../molecules/bookCard/index";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {width:"920px"},
  parent:{display:"flex",justifyContent:"center"}
});

const MyLibraryTemplate = () => {
  const classes = useStyles();
  return (
    <div className={classes.parent}>
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {Data.map((d) => (
            <Grid item xs={2} sm={4} md={4} key={d.id} className={classes.root}>
              <BookCard
                mode={"normal"}
                bookName={d.cardName}
                authorName={d.authorName}
                src={d.src}
                time={d.timeStamp}
                read={d.reads}
                status={d.isread}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div></div>
  );
};
export default MyLibraryTemplate;
