import * as React from "react";
import "../sass/main.css";
import picture1 from "../assets/events/5.CR2.jpg";
import picture2 from "../assets/events/6.JPG";
import picture3 from "../assets/events/10.CR2.jpg";

const Section1 = () => {
  return (
    <section className="section-about" id="section1">
      <div className="grid grid-2">
        <div className="left">
          <h3 className="left__heading heading-secondary">
            Welcome to Milan.<br></br>IIT Hyderbad.
          </h3>
          <p className="left__about">
            "Milan" is the annual techno-cultural-sports General Championship of
            IIT Hyderabad. It consists of 16 Sports, 19 Cultural and 9 technical
            events conducted between all the hostel blocks. In this second
            edition of Milan, presented by SBI YONO, the sports, cultural, and
            technical events will start from 25th February and will conclude on
            6th March
          </p>
        </div>
        <div class="composition">
          <img
            src={picture1}
            alt="photo-1"
            class="composition__photo composition__photo--p1"
          />
          <img
            src={picture2}
            alt="photo-2"
            class="composition__photo composition__photo--p2"
          />
          <img
            src={picture3}
            alt="photo-3"
            class="composition__photo composition__photo--p3"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
