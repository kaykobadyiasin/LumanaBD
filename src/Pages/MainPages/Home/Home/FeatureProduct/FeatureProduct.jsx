import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SingleCard from "../../../../../Components/SingleCard/SingleCard";

const FeatureProduct = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('featureProducts.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
            .catch((error) => {
                console.error("Error fetching feature products:", error);
            });
    }, []);

    return (
        <div>
            <div className="bg-white border rounded-md p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-800">Featured Products</h3>
                    <Link to="/all-products" className="bg-primary text-white rounded-full px-3 py-1 transition-all duration-300 hover:bg-primary-dark">See All</Link>
                </div>
                <div className="my-5">
                    <Swiper
                        breakpoints={{
                            320: {
                                slidesPerView: 1, // Show 1 slide on screens of width 320px
                            },
                            375: {
                                slidesPerView: 1, // Show 1 slide on screens of width 375px
                            },
                            425: {
                                slidesPerView: 1, // Show 2 slides on screens of width 425px
                            },
                            768: {
                                slidesPerView: 2, // Show 2 slides on screens of width 425px
                            },
                            1024: {
                                slidesPerView: 2, // Show 3 slides on screens of width 1024px
                            },
                            1440: {
                                slidesPerView: 2, // Show 3 slides on screens of width 1440px
                            },
                            2560: {
                                slidesPerView: 2, // Show 4 slides on screens of width 2560px
                            },
                        }}
                    >
                        {features.map((feature) => (
                            <SwiperSlide key={feature?._id}>
                                <Link to={`/productSingle/${feature?._id}`}>
                                    <SingleCard feature={feature}/>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;
