/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1 from "../../data/portfolio1.json";

export const WorkTwoColumn = () => {
  const [selectedFilter, setSelectedFilter] = useState("*");

  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const filterClicked = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredPortfolio = selectedFilter === "*" ?
    portfolio1.portfolio :
    portfolio1.portfolio.filter(item => item.filterClass === selectedFilter);

  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Works</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span
                      data-filter="*"
                      className={selectedFilter === "*" ? "active" : ""}
                      onClick={() => filterClicked("*")}
                    >
                      All
                    </span>
                    {portfolio1.filtersName.map((filter) => (
                      <span
                        key={filter.id}
                        data-filter={filter.filterClass}
                        className={selectedFilter === filter.filterClass ? "active" : ""}
                        onClick={() => filterClicked(filter.filterClass)}
                      >
                        {filter.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row grid">
                {filteredPortfolio.map((item) => (
                  <div
                    key={item.id}
                    className={`col-lg-6 items ${item.filterClass}`}
                  >
                    <div className="item">
                      <div className="cont vis">
                        <h5>
                          <Link href="/project-details">{item.title}</Link>
                        </h5>
                        <span>{item.tag}</span>
                        <span>{item.filterClass}</span>
                        <p>{item.content}</p>
                      </div>
                      <div className="img">
                        <img src={item.image} alt={item.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
