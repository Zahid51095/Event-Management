import Marquee from "react-fast-marquee";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="mb-8">
      <button className="btn btn-secondary mb-4">Recent Events</button>
      <Marquee pauseOnHover={true}>
        <Link to="/">
          <div className="card w-56 h-56 bg-base-100 shadow-xl mr-12">
            <div className="card-body">
              <h2 className="card-title">Seminar By Bata</h2>
            </div>
            <figure>
              <img src={slider1} alt="Shoes" />
            </figure>
          </div>
        </Link>

        <Link className="mr-12" to="/">
          <div className="card w-56 h-56 bg-base-100 shadow-xl mr-12">
            <div className="card-body">
              <h2 className="card-title">Trade Show and Expo By Aarong</h2>
            </div>
            <figure>
              <img src={slider2} alt="Shoes" />
            </figure>
          </div>
        </Link>

        <Link className="mr-12" to="/">
          <div className="card w-56 h-56 bg-base-100 shadow-xl mr-12">
            <div className="card-body">
              <h2 className="card-title">Award Giving Ceremony By Orbitax</h2>
            </div>
            <figure>
              <img src={slider3} alt="Shoes" />
            </figure>
          </div>
        </Link>

        <Link className="mr-12" to="/">
          <div className="card w-56 h-56 bg-base-100 shadow-xl mr-12">
            <div className="card-body">
              <h2 className="card-title">Corporate meeting By Grameenphone </h2>
            </div>
            <figure>
              <img src={slider4} alt="Shoes" />
            </figure>
          </div>
        </Link>
      </Marquee>
    </div>
  );
};

export default Slider;
