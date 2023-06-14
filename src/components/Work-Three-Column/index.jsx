import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import data from "../../data/portfolio1.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
  
const WorkThreeColumn = () => {
  const { filtersName, portfolio } = data;

  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              {filtersName.map((filter) => (
                <span data-filter={filter.filterClass} key={filter.id}>
                {filter.name}
                </span>
              ))}
            </div>
          </div>
          <div className="row gallery">
            {portfolio.map((project, index) => (
              <div
                className={`col-lg-4 col-md-6 items ${project.tag}`}
                key={index}
              >
                <div className="item">
                  <div className="img">
                    <img src={project.image} alt="" />
                  </div>
                  <div className="cont">
                    <h5>
                    <Link href={project.link}>
                        {project.title}
                      </Link>
                    </h5>
                    {/* <span>{project.tag}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
