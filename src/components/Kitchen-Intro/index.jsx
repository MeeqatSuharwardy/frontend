import React from "react";
import Link from "next/link";
import KitchenProjectDetailsData from "../../data/KitchenProjectDetails.json";

const KProjectIntro = () => {
  const {tags, categories } = KitchenProjectDetailsData;
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
              {KitchenProjectDetailsData.text}
              </p>
            </div>
          </div>

          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href="#">{KitchenProjectDetailsData.client}</Link>
              </p>
            </div>
          </div> */}
          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>{KitchenProjectDetailsData.Date}</p>
            </div>
          </div> */}
          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Link href={category.url}>{category.name}</Link>
             {category.name}
              {index !== categories.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>
            </div>
          </div> */}
          {/* <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
              {tags.map((tag, index) => (
            <React.Fragment key={index}>
              {tag.name}
              {index !== tag.length - 1 && ', '}
            </React.Fragment>
          ))}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default KProjectIntro;
