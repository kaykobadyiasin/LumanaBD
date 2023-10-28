import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import { Icon } from "@iconify/react";
import 'animate.css';


const Layout = () => {
    return (
        <div className="relative">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="xl:pt-20 lg:pt-20 md:pt-14 pt-24">
                <Outlet />
            </div>
            <hr className="opacity-52" />
            <Footer />
            {/* <Link to='/'>
                <div className="fixed z-40 top-96 right-0 bg-white flex flex-col shadow-lg border border-primary">
                    <div className="lg:px-7 lg:py-3 px-4 py-2">
                        <Icon icon="bi:cart4" className="text-3xl animate__animated animate__tada animate__delay-1s animate__infinite infinite" />
                        <h4 className="text-center mt-3"><span className="text-2xl">৳</span> 0</h4>
                    </div>
                    <span className="text-center bg-[#59B210] text-white px-2">0 items</span>
                </div>
            </Link> */}
        </div>
    );
};

export default Layout;