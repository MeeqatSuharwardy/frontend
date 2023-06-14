/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import LProjectIntro from "../../components/Living-Intro";
import LivingProjectDetailsData from "../../data/LivingProjectDetails.json";

const KitchenProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Living"
        fullPath={[
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image={LivingProjectDetailsData.image}
      />
      <LProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {LivingProjectDetailsData.images.map((image, index) => (
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
