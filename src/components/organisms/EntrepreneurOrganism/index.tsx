import { makeStyles } from "@mui/styles";
import BookCard from "../../molecules/bookCard/index";
import Box from "@mui/material/Box";
import Text from "../../atoms/text/index";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Search from "@mui/icons-material/Search";
import Banner from "../../molecules/banner";
import { Grid } from "@material-ui/core";
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
    paddingTop: "80px",
    paddingBottom: "25px",
    fontWeight: 700,
  },
  search: {
    width: "658px",
    paddingTop: "61px",
  },
});

const EntrepreneurOrganism = (props: { book: any; setData: any }) => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div className={classes.root}>
        <Banner></Banner>
        <div className={classes.search}>
          <FormControl variant="standard">
            <Input
              sx={{ width: "658px" }}
              placeholder="Search by title or author"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </FormControl>
        </div>
        <div className={classes.text}>
          <Text
            variant={"caption"}
            text={"Trending blinks"}
            height={"24px"}
          ></Text>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {props.book &&
              props.book
                .filter((d: any) => !d.just && !d.audio)
                .map((d: any) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    {d.isEnt ? (
                      <BookCard
                        mode={"non-hover"}
                        bookName={d.cardName}
                        authorName={d.authorName}
                        src={d.src}
                        time={d.timeStamp}
                        read={d.reads}
                        status={d.isread}
                      />
                    ) : (
                      <BookCard
                        mode={"normal"}
                        bookName={d.cardName}
                        authorName={d.authorName}
                        src={d.src}
                        time={d.timeStamp}
                        read={d.reads}
                        status={d.isread}
                      />
                    )}
                  </Grid>
                ))}
          </Grid>
          <Text variant={"h1"} text={"Just added"} height={"18px"} />
          <Grid container spacing={2}>
            {props.book &&
              props.book.map((d: any) => {
                if (d.just) {
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
                        mode={"non-hover"}
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
              })}
          </Grid>
          <Text variant={"h1"} text={"Featured audio blinks"} height={"18px"} />
          <Grid container spacing={2}>
            {props.book &&
              props.book
                .filter((d: any) => d.audio)
                .map((d: any) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    <BookCard
                      mode={"non-hover"}
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
      </div>
    </div>
  );
};
export default EntrepreneurOrganism;
