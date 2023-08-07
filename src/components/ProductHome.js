import "../components/productSlider.css"
import bottleKorken from "../asset/bottle_KORKEN_29.000.png"
import dekorasiBjorkspirea from "../asset/dekorasi_BJÖRKSPIREA_249.000.png"
import lampTertial from "../asset/lampu_TERTIAL_199.000.png"
import rakVittsio from "../asset/rak_VITTSJÖ_999.000.png"
import mejaMicke from "../asset/meja_MICKE_999.000.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import { IoOpen } from "react-icons/io5"
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from "react-router-dom"
import React from 'react';


const ProductHome = () => {
    return (
        <>
            <div className="container-slider">
                <section className="section-slider">
                    <div className="title-swiper">
                        <h1 className="title-main">Best Product</h1>
                        <Link to="/product">
                            <button className="btn-viewMore">View More <IoOpen /></button>
                        </Link>
                    </div>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Mousewheel, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="wrapper-slider">
                                <h3 className="title-product">Bottle Kroken</h3>
                                <img className="img-slider" src={bottleKorken} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="wrapper-slider">
                                <h3 className="title-product">Bjorkspirea</h3>
                                <img className="img-slider" src={dekorasiBjorkspirea} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="wrapper-slider">
                                <h3 className="title-product">Lamp Tertial</h3>
                                <img className="img-slider" src={lampTertial} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="wrapper-slider">
                                <h3 className="title-product">Rak Vittsio</h3>
                                <img className="img-slider" src={rakVittsio} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="wrapper-slider">
                                <h3 className="title-product">Meja Micke</h3>
                                <img className="img-slider" src={mejaMicke} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </div>
        </>
    );
}

export default ProductHome;