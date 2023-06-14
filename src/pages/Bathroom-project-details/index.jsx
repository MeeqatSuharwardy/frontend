/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import BathProjectIntro from "../../components/Bathroom-Intro";
import BathroomProjectDetailsData from "../../data/BathroomProjectDetails.json";

const KitchenProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Bathroom"
        fullPath={[
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image={BathroomProjectDetailsData.image}
      />
      <BathProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {BathroomProjectDetailsData.images.map((image, index) => (
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
