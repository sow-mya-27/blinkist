import React from "react";
import Footer from "../../organisms/footer";
import Header from "../../organisms/header";
import MyLibraryTemplate from "../../organisms/myLibrary";
import HomePageTemplate from "../../templates/HomePage";

const MyLibrary = () => {
  return (
    <div>
      <HomePageTemplate
        header={<Header></Header>}
        body={<MyLibraryTemplate></MyLibraryTemplate>}
        footer={<Footer></Footer>}
      />
    </div>
  );
};
export default MyLibrary;
