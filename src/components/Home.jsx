import React from "react";
import Menu from "./Menu";
import slider from "../asset/navbar/slider.webp";
import admission from "../asset/update/admission.png"
import career from "../asset/update/career.png"
import form from "../asset/update/forms.png"
import syllabus from "../asset/update/syllabus.png"
import press from "../asset/update/press.png"

const Home = () => {
  return (
    <>
      <Menu />
      <div className="heroSection">
        <img src={slider} alt="" />
      </div>

      <div>
        <div className="updates">
          <div className="updatesTag">Latest Updates</div>
          <div>
            Admission Forms for Class XI Science, Commerce & Humanities are
            available from School Reception
          </div>
        </div>

        <div className="updateBottom">
          <div className="heroDetails">
            <div className="image-div-update">
              <img src={admission} alt="" />
            </div>
            <div className="process">
              <div>Admission</div>
              <div className="click">Click here..</div>
            </div>
          </div>

          <div className="heroDetails">
            <div className="image-div-update">
              <img src={syllabus} alt="" />
            </div>
            <div className="process">
              <div>Syllabus</div>
              <div className="click">Click here..</div>
            </div>
          </div>
          <div className="heroDetails">
            <div className="image-div-update">
              <img src={form} alt="" />
            </div>
            <div className="process">
              <div>Application Forms</div>
              <div className="click">Click here..</div>
            </div>
          </div>
          <div className="heroDetails">
            <div className="image-div-update">
              <img src={form} alt="" />
            </div>
            <div className="process">
              <div>Alumni Form</div>
              <div className="click">Click here..</div>
            </div>
          </div>
          <div className="heroDetails">
            <div className="image-div-update">
              <img src={press} alt="" />
            </div>
            <div className="process">
              <div>Press</div>
              <div className="click">Click here..</div>
            </div>
          </div>
          <div className="heroDetails">
            <div className="image-div-update">
              <img src={career} alt="" />
            </div>
            <div className="process">
              <div>Career</div>
              <div className="click">Click here..</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
