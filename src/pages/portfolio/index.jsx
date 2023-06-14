/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumn from "../../components/Work-Three-Column";
import data from "../../data/workHeader.json";

const Work2 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
          center
          title={data.title}
          content={data.content}      
      />
      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Work2;
