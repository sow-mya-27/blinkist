import React from "react";
import BookDetailOrganism from "../../organisms/BookDetailOrganism";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import EntrepreneurTemplate from "../../templates/EntrepreneurTemplate";

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
const BookDetailPage = (props: { book: data[]; setData: any }) => {
  return (
    <EntrepreneurTemplate
      header={<Header></Header>}
      body={
        <BookDetailOrganism
          book={props.book}
          setData={props.setData}
        ></BookDetailOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default BookDetailPage;
