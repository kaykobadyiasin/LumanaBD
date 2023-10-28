import Banner from "../../../../Components/Banner/Banner";
import NavLists from "../../../../Components/NavLists/NavLists";
import TopCategories from "../TopCategories/TopCategories";
import BestSelling from "./BestSelling/BestSelling";
import FeatureProduct from "./FeatureProduct/FeatureProduct";
import Health from "./Health/Health";
import Kitchen from "./Kitchen/Kitchen";
import NewProducts from "./NewProducts/NewProducts";

const Home = () => {
    return (
        <div className="bg-bgPrimary py-5">
            <div className="container mx-auto min-h-screen">
                <div className="lg:flex justify-between flex-wrap-reverse shadow-md">
                    <div className="lg:w-1/6 lg:block hidden ">
                        <NavLists />
                    </div>
                    <div className="lg:w-5/6 w-full">
                        <Banner />
                    </div>
                </div>
                <div className="my-8">
                    <TopCategories />
                </div>
                <div className="flex lg:flex-row flex-col gap-8">
                    <div className="lg:w-1/2 w-full">
                        <FeatureProduct />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <NewProducts />
                    </div>
                </div>
                <div className="py-8 w-full">
                    <img src="https://apii.lazma.com/public/settings/BWuYRJJa5W28nM4KO2i.jpg" className="w-full" alt="" />
                </div>
                <div className="my-8">
                    <Kitchen />
                </div>
                <div className="my-8">
                    <Health />
                </div>
                <div className="flex  gap-8 py-8">
                    <div className="lg:w-1/2 w-full">
                        <img src="https://apii.lazma.com/public/settings/_9h9xOBSDFDWHr6wtka.jpg" className="w-full" alt="" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <img src="https://apii.lazma.com/public/settings/kEY0YzkdJsbQwPqfkMx.jpg" className="w-full" alt="" />
                    </div>
                </div>
                <div className="my-8">
                    <BestSelling />
                </div>
            </div>
        </div>
    );
};

export default Home;
