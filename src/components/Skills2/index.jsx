import React from 'react'
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress()
  }, [])
    return (
      <div className="skills-sec section-padding pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="skills-box full-width">
                <div className="skill-item">
                  <h6>Architecture</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>Interior Design</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6>3D Modeling</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <h4 className="playfont line-height-50 mb-20">
                Providing Bespoke Design Solutions.
                </h4>
                <p className="mb-10">
                At Mundo, we believe that every space is unique and has its own personality, and that's why we provide bespoke design solutions tailored to meet the specific needs of our clients.
                </p>
                <p>
                We work closely with our clients to understand their preferences, requirements, lifestyle, and budget to create interiors that are functional, ergonomically and aesthetically pleasing. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Skills2