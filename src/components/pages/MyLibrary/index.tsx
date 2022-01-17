import React from "react";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import JsonSample from "../../organisms/jsonSample";
import MyLibraryTemplate from "../../organisms/myLibrary";
import HomePageTemplate from "../../templates/HomePage";

const MyLibrary = () => {
  return (
    <div >
      <HomePageTemplate
        header={<Header></Header>}
        body={<JsonSample></JsonSample>}
        footer={<Footer></Footer>}
      />
    </div>
  );
};
export default MyLibrary;
