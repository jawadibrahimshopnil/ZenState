import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className='my-6 z-0'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={35}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide><img src='https://ap.rdcpix.com/312f776000e8f4427940b22c77ab4af3l-m418161397od-w1080_h768.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://ap.rdcpix.com/2a0c0db6c3d3c6118a5da0ad553b8d81l-m3579874056rd-w1080_h768.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://ap.rdcpix.com/4e84fde6a88e5c7bf2eab75a3cb724bbl-m2939401519rd-w1080_h768.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://ap.rdcpix.com/c112dac8d9a2ee8b8132f13e3f312acfl-m412048566od-w1080_h768.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://ap.rdcpix.com/b04341e0b7596f0646e86d9565ace695l-m160559136rd-w1080_h768.webp' /></SwiperSlide>
                <SwiperSlide><img src='https://ap.rdcpix.com/561b886673b31609e72e663df283d29al-m2830088036od-w1080_h768_x2.webp' /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;