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


    const idInt = parseInt(id);
    console.log(idInt);

    // const card = cards.find(card => card.id == idInt);
    // console.log(card);


    

    useEffect(()=>{
        const findCard = cards?.find(card=>card.id == idInt) 
        setCard(findCard);
    },[idInt, cards])

    console.log(card);
   
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">Service Detail</h2>
                    <p>{ id }</p>
                    {/* <h2>Service detail of: {card.name}</h2> */}

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
            
        </div>
    );
};

export default Card;