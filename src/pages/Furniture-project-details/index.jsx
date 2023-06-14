/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import FProjectIntro from "../../components/Furniture-Intro";
import FurnitureProjectDetailsData from "../../data/FurnitureProjectDetails.json";

const KitchenProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Furniture"
        fullPath={[
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image={FurnitureProjectDetailsData.image}
      />
      <FProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {FurnitureProjectDetailsData.images.map((image, index) => (
              <div className="col-lg-4 col-xl-3 col-md-12" key={index}>
                <img alt={image.alt} src={image.src} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default KitchenProjectDetails;
