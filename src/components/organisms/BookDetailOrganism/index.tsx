import { Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useLocation,useNavigate } from "react-router-dom";
import Details from "../../molecules/BookDetail";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useState } from "react";
import Text from "../../atoms/text";

const useStyles = makeStyles({
  flexDiv: {
    width: "920px",
    display: "flex",
    flexDirection: "column",
  },
  root: {
    display: "flex",
    justifyContent: "center",
  },

  buttonStyle: {
    width: "200px",
    textAlign: "left",
    color:'black'
  },
  buttonStyle2: {
    width: "200px",
    height: "44px",
    margin: "5px",
    borderRadius: "5px",
    fontSize: "14px",
    "&:hover": {
       color: "white",
       backgroundColor: "#22C870"}
  },
  finishedButton: {
    width: "170px",
    textAlign: "left",
    height: "44px",
    "&.MuiButton-text": { backgroundColor: "#22C870" },
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
type data = {
  src: string;
  cardName: string;
  authorName: string;
  timeStamp: string;
  id: number;
  isread: boolean;
  reads: string;
  status: boolean;
};
const BookDetailOrganism = (props: { book: data[]; setData: any }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const loc = location.state;
  let id = 0;

  props.book &&
    // eslint-disable-next-line array-callback-return
    props.book.map((d: any) => {
      if (d.id === loc) {
        id = d.id - 1;
      }
    });

  const classes = useStyles();
  let src1 = "",
    bookName = "",
    authorName = "",
    timeStamp = "";

  if (props.book[id]) {
    src1 = props.book[id].src 
    bookName = props.book[id].cardName;
    authorName = props.book[id].authorName;
    timeStamp = props.book[id].timeStamp;
  }
  console.log(bookName)
  const [button, setButton] = useState("synopsis");
  const handleFinish = () => {
    props.book[id].status = false;
  };
  const handleRead = () => {
    props.book[id].status = true;
  };
  return (
    
    <div className={classes.root}>
      <div className={classes.flexDiv}>
        
        {src1 && <Details
          book={props.book}
          setData={props.setData}
          src={src1}
          bookName={bookName}
          authorName={authorName}
          timeStamp={timeStamp}
        ></Details>}
        <div>
          <div>
          <Button className={classes.buttonStyle2}
              variant="outlined"
              
            onClick={handleRead}>
              Read Now
            </Button>
            
            <Button
              className={classes.finishedButton}
              variant="text"
              onClick={handleFinish}
            >Finished Reading
              
            </Button>
            <Button
              className={classes.buttonStyle2}
              variant="text"
              endIcon={<ArrowForwardOutlinedIcon />}
              onClick={() => navigate("/")}
            >Send to Kindle
            </Button>
          </div>
          <div style={{ paddingTop: "72px" }}>
            <Button
              className={classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton("synopsis");
              }}
            >
              <Text
                variant={"body1"}
                text={"Synopsis"}
                height={"16px"}
                color="#03314B"
              ></Text>
            </Button>
            <Button
              className={classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton("who");
              }}
            >
              <Text
                variant={"body1"}
                text={"Who is it for?"}
                height={"16px"}
                color="#03314B"
              ></Text>
            </Button>
            <Button
              className={classes.buttonStyle}
              variant="text"
              onClick={() => {
                setButton("about");
              }}
            >
              <Text
                variant={"body1"}
                text={"About the author"}
                height={"16px"}
                color="#03314B"
                width="200px"
              ></Text>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "600px",
            }}
          >
            {button === "synopsis" ? (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#2CE080",
                }}
              ></hr>
            ) : (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#E1ECFC",
                }}
              ></hr>
            )}
            {button === "who" ? (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#2CE080",
                }}
              ></hr>
            ) : (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#E1ECFC",
                }}
              ></hr>
            )}
            {button === "about" ? (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#2CE080",
                }}
              ></hr>
            ) : (
              <hr
                style={{
                  width: "200px",
                  height: "2px",
                  backgroundColor: "#E1ECFC",
                }}
              ></hr>
            )}
          </div>
          <div style={{ paddingBottom: "257px" }}>
            {button === "synopsis" ? (
              <Text
                variant={"body1"}
                text={
                  bookName +
                  "(2020) updates " +
                  authorName +
                  "’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world."
                }
                height={"16px"}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
            {button === "who" ? (
              <Text
                variant={"body1"}
                text="any one who are interested in Entrepreneurship"
                height={"16px"}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
            {button === "about" ? (
              <Text
                variant={"body1"}
                text={authorName}
                height={"16px"}
                width="600px"
                color="#03314B"
              ></Text>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default BookDetailOrganism;
