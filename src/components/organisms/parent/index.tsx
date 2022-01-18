import React, { useState, createContext, useEffect } from "react";
import MyLibraryTemplate from "../myLibrary";
// export const ParentData = createContext([]);

export const ParentDataProvide = (props: any) => {
  const [bookData, setBookData] = useState<null | any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/Data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookData(data);
      });
  }, []);
  return (
    <div>
      <MyLibraryTemplate name={"hi"} />
    </div>
    // <ParentData.Provider value={[bookData, setBookData]}>
    //   {props.children}
    // </ParentData.Provider>
  );
};
