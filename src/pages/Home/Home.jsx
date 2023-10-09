import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";

const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        cards.map(card => <ServiceCard
                        key={card._id}
                        cards ={card}
                        
                        >
                        
                        </ServiceCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;