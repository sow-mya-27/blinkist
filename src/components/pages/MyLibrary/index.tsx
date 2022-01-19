import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import MyLibraryTemplate from "../../organisms/myLibrary";
import HomePageTemplate from "../../templates/HomePage";

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
const MyLibrary = (props: { book: data[]; setData: any }) => {
  return (
    <div>
      <HomePageTemplate
        header={<Header></Header>}
        body={
          <MyLibraryTemplate
            book={props.book}
            setData={props.setData}
          ></MyLibraryTemplate>
        }
        footer={<Footer></Footer>}
      />
    </div>
  );
};
export default MyLibrary;
