import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Link } from "react-router-dom";
import SingleCard from "../../../../../Components/SingleCard/SingleCard";

const NewProducts = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('featureProducts.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, []);

    return (
        <div>
            <div className="bg-white border rounded-md p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">New Products</h3>
                    <Link className="bg-primary text-white rounded-full px-3 py-1">See All</Link>
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
                                slidesPerView: 3, // Show 4 slides on screens of width 2560px
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

export default NewProducts;
