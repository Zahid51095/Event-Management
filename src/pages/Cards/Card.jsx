import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar"
import { useEffect, useState } from "react";

const Card = () => {
    const [card, setCard] = useState();

   
    const cards = useLoaderData();
    console.log(cards);

    const { id } = useParams();
    console.log(id);
    

    useEffect(()=>{
        const findCard = cards?.find(card => card._id == id)
        setCard(findCard);
    },[id, cards])

    console.log(card);
   
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">Service Detail</h2>
                    <img src={card?.image_url} alt="" />
                    <p className="text-lg font-bold">{card?.name}</p>
                    <p className="font-semibold">Price: {card?.price}</p>
                    <p>{card?.description}</p>
                    

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
            
        </div>
    );
};

export default Card;