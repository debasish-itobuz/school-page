import React from "react";
import Menu from "./Menu";
import slider from "../asset/navbar/slider.webp";
import admission from "../asset/update/admission.png";
import career from "../asset/update/career.png";
import form from "../asset/update/forms.png";
import syllabus from "../asset/update/syllabus.png";
import press from "../asset/update/press.png";
import principal from "../asset/update/principal.jpeg";
import founder from "../asset/update/founder.jpeg";

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

      <div className="userSection">
      <div className="userDetails green">
          <div className="userImg">
            <img src={founder} alt="" className="user" />
          </div>
          <p className="userHeading">Founder Chairman's Message</p>
          <p>
            Agrasain Boys' School is a linguistic minority viz Marwari (Agarwal)
            institution run by agarwals within the meaning of Article 30 of the
            Constitution of India.lt is a self-financed institution governed by
            an Autonomous Governing Council. Its broad aim is all round
            development of the students and seeks to promote the spread of
            education, natural regeneration and moral upliftinent of the young
            boys to remove social evils and upgrade the living conditions of the
            poor and downtrodden.
          </p>
          <button className="readMore">Read More</button>
        </div>
        <div className="userDetails peach">
          <div className="userImg">
            <img src={principal} alt="" className="user" />
          </div>
          <p className="userHeading">Chairman's Message</p>
          <br/>
          <p>
            Agrasain Boys' School is a linguistic minority viz Marwari (Agarwal)
            institution run by agarwals within the meaning of Article 30 of the
            Constitution of India.lt is a self-financed institution governed by
            an Autonomous Governing Council. Its broad aim is all round
            development of the students and seeks to promote the spread of
            education, natural regeneration and moral upliftinent of the young
            boys to remove social evils and upgrade the living conditions of the
            poor and downtrodden.
          </p>
          <button className="readMore">Read More</button>
        </div>

        <div className="userDetails yellow">
          <div className="userImg">
            <img src={founder} alt="" className="user" />
          </div>
          <p className="userHeading"> Director's Message</p>
          <br/>
          <p>
            Agrasain Boys' School is a linguistic minority viz Marwari (Agarwal)
            institution run by agarwals within the meaning of Article 30 of the
            Constitution of India.lt is a self-financed institution governed by
            an Autonomous Governing Council. Its broad aim is all round
            development of the students and seeks to promote the spread of
            education, natural regeneration and moral upliftinent of the young
            boys to remove social evils and upgrade the living conditions of the
            poor and downtrodden.
          </p>
          <button className="readMore">Read More</button>
        </div>

        <div className="userDetails blue">
          <div className="userImg">
            <img src={principal} alt="" className="user" />
          </div>
          <p className="userHeading">Principal's Message</p>
          <br/>
          <p>
            Agrasain Boys' School is a linguistic minority viz Marwari (Agarwal)
            institution run by agarwals within the meaning of Article 30 of the
            Constitution of India.lt is a self-financed institution governed by
            an Autonomous Governing Council. Its broad aim is all round
            development of the students and seeks to promote the spread of
            education, natural regeneration and moral upliftinent of the young
            boys to remove social evils and upgrade the living conditions of the
            poor and downtrodden.
          </p>
          <button className="readMore">Read More</button>
        </div>

      </div>
    </>
  );
};

export default Home;
