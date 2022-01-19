import { makeStyles } from "@mui/styles";
import BookCard from "../../molecules/bookCard/index";
import Box from "@mui/material/Box";
import { Button, Grid } from "@material-ui/core";
import Text from "../../atoms/text/index";
import { useState } from "react";
// type book = {
//   src: string;
//   cardName: string;
//   authorName: String;
//   timeStamp: String;
//   id: number;
//   isread: boolean;
//   reads: string;
//   status: boolean;
// };
const useStyles = makeStyles({
  root: { width: "920px" },
  parent: { display: "flex", justifyContent: "center" },
  currently: {
    paddingTop: "60px",
    paddingBottom: "60px",
    position: "relative",
    paddingleft: "0px",
  },
  buttonStyle: {
    width: "284px",
  },
  text: {
    paddingLeft: "0px",
    paddingTop: "50px",
  },
  line: {
    width: "304px",
    height: "0px",
  },
});
type data = {
  src: string;
  cardName: string;
  authorName: String;
  timeStamp: String;
  id: number;
  isread: boolean;
  reads: string;
  status: boolean;
};
const MyLibraryTemplate = (props: { book: data[]; setData: any }) => {
  const classes = useStyles();
  const [currently, setCurrently] = useState(true);
  const [finished, setFinished] = useState(false);
  let style1, style2;
  if (currently) {
    style1 = {
      color: "#22C870",
    };
    style2 = {
      color: "#6D787E",
      fontWeight: 100,
    };
  } else {
    style2 = {
      color: "#22C870",
    };
    style1 = {
      color: "#6D787E",
    };
  }

  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <div className={classes.text}>
          <Text
            variant={"h1"}
            text={"My Library"}
            height={"36px"}
            color="#03314B"
          />
        </div>
        <div className={classes.currently}>
          <Button
            className={classes.buttonStyle}
            variant="text"
            onClick={() => {
              setCurrently(true);
              setFinished(false);
            }}
            style={style1}
          >
            <Text
              variant={"subtitle1"}
              text={"Currently Reading"}
              height={"18px"}
            />
          </Button>

          <Button
            className={classes.buttonStyle}
            variant="text"
            onClick={() => {
              setCurrently(false);
              setFinished(true);
            }}
            style={style2}
          >
            <Text variant={"subtitle1"} text={"Finished "} height={"18px"} />
          </Button>
          <div className={classes.parent}>
            <hr
              className={classes.line}
              style={currently ? { color: "#2CE080" } : { color: "#F1F6F4" }}
            ></hr>
            <hr
              className={classes.line}
              style={finished ? { color: "#2CE080" } : { color: "#F1F6F4" }}
            ></hr>
            <hr className={classes.line} style={{ color: "#F1F6F4" }}></hr>
          </div>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {props.book &&
              props.book.map((d: any) => {
                if (d.status) {
                  return (
                    currently && (
                      <Grid
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={d.id}
                        className={classes.root}
                      >
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
                    )
                  );
                }
                if (!d.status && finished) {
                  return (
                    <Grid
                      item
                      xs={2}
                      sm={4}
                      md={4}
                      key={d.id}
                      className={classes.root}
                    >
                      <BookCard
                        mode={"finished"}
                        bookName={d.cardName}
                        authorName={d.authorName}
                        src={d.src}
                        time={d.timeStamp}
                        read={d.reads}
                        status={d.isread}
                      />
                    </Grid>
                  );
                }
                if (!d.status && currently) {
                  console.log("hi");
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    <BookCard
                      mode={"read again"}
                      bookName={d.cardName}
                      authorName={d.authorName}
                      src={d.src}
                      time={d.timeStamp}
                      read={d.reads}
                      status={d.isread}
                    />
                  </Grid>;
                }
              })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default MyLibraryTemplate;
