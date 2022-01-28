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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const [input, setInput] = useState("");

  const classes = useStyles();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val=e.target.value.toLowerCase()
    setInput(val);
    console.log(input)
  };
  const clickHandler=(d:any)=>{
    navigate("/enterpreuner/bookdetails", {
                            state: d.id,
                          });

  }
  
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
              value={input}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        {input==="" ? (<div><div className={classes.text}>
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
                  <Grid  onClick={()=>clickHandler(d)}
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    {d.startedBook ? (
                      <div 
                        
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
                      </div>
                    ) : (
                      <div
                        
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
                      </div>
                    )}
                  </Grid>
                ))}
          </Grid>
          <Text variant={"h1"} text={"Just added"} height={"18px"} />
          <Grid container spacing={2}>
          {props.book &&
              props.book
                .filter((d: any) => d.just)
                .map((d: any) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    <div
                      onClick={()=>clickHandler(d)}
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
                    </div>
                  </Grid>
                ))}
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
                    <div
                      onClick={()=>clickHandler(d)}
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
                    </div>
                  </Grid>
                ))}
          </Grid>
        </Box></div>)
      :<Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {props.book &&
              props.book
                .filter((d: any) => d.authorName.toLowerCase().includes(input) || d.cardName.toLowerCase().includes(input))
                .map((d: any) => (
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={4}
                    key={d.id}
                    className={classes.root}
                  >
                    {d.startedBook ? (
                      <div
                        onClick={()=>clickHandler(d)}
                      >
                        <BookCard
                          mode={"non-hover"}
                          bookName={d.cardName}
                          authorName={d.authorName}
                          src={d.src}
                          time={d.timeStamp}
                          read={d.reads}
                          status={d.isread}
                        /></div>):(<></>)}
                      </Grid>))}
                      </Grid></Box>  }
        </div>
    </div>
  );
};
export default EntrepreneurOrganism;
