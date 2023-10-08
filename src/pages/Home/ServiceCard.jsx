/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const ServiceCard = ({ cards }) => {

  const { name, image_url, button, description, price, _id } = cards;
  return (
    <div className="card bg-base-100 shadow-xl mb-16">
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p className="">Price: {price}</p>
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/cards/${_id}`}><button className="btn btn-secondary">{button}</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
