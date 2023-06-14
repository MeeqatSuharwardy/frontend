/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import KProjectIntro from "../../components/Kitchen-Intro";
import KitchenProjectDetailsData from "../../data/KitchenProjectDetails.json";

const KitchenProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Kitchen"
        fullPath={[
          { id: 2, name: "portfolio", url: "/work1" },
          { id: 3, name: "project details", url: "/project-details" },
        ]}
        image={KitchenProjectDetailsData.image}
      />
      <KProjectIntro />
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            {KitchenProjectDetailsData.images.map((image, index) => (
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
