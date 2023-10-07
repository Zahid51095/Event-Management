import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CR2 from "../../../assets/cr-2.png";
import CR3 from "../../../assets/cr3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl ">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl ">Client Review</h2>

        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={CR2}
              alt="Shoes"
              className=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Farhan Musfiq</h2>
            <p>I can not express how thankful I am for the amazing experience I had with this event management website. From the initial planning stages to the execution of our corporate event, everything was flawless.I highly recommend their services!</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={CR3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kaiyum Raihan</h2>
            <p>I have been using this event management website for several years now, and they consistently deliver outstanding results. Their team is responsive, creative, and always goes the extra mile to ensure our events are memorable. I would not trust anyone else with our corporate gatherings.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightSideNav;
