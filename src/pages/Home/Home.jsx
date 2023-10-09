import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";
import Footer from "./Footer/Footer";

const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl mb-4">Our Services</h2>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;