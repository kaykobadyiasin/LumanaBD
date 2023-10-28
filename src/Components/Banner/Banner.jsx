import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const sliderImages = [
    {
        imgPath: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=2010&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        imgPath: 'https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        imgPath: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        imgPath: 'https://images.unsplash.com/photo-1682685797795-5640f369a70a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

];

const Banner = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {sliderImages.map((slidImage, index) => (
                    <SwiperSlide key={index}>
                        <img src={slidImage.imgPath} className='w-full lg:h-[492px] h-[200px] object-cover' alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Banner;
