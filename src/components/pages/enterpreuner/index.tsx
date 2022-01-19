import React from "react";
import EntrepreneurOrganism from "../../organisms/EntrepreneurOrganism";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import EntrepreneurTemplate from "../../templates/EntrepreneurTemplate";

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
const Entrepreneurship = (props: { book: data[]; setData: any }) => {
  return (
    <EntrepreneurTemplate
      header={<Header></Header>}
      body={
        <EntrepreneurOrganism
          book={props.book}
          setData={props.setData}
        ></EntrepreneurOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default Entrepreneurship;
