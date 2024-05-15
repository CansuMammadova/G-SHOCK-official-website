import React from 'react';
import './style.scss';
import Layout from '../../Components/Layout';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Watches = () => {
    return (
        <Layout>
            <div className='watches'>
                <div className='slider'>
                    <div className='container' style={{ display: 'flex' }}>
                    </div>
                </div>
            </div>
            <div className='watch-shop'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches1.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DN-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches2.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B300CXD-9A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches3.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches4.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000D-1A9</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches5.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000PRB-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches6.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000CX-9A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches7.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000FR-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches8.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000D-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches9.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000B-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches10.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DB-1A</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='new-pro'>
                            <div className='product-img'>
                                <img src="./img/watches11.avif" alt="" />
                            </div>
                            <div className='product-caption'>
                                <h6>G-SHOCK</h6>
                                <h5>MTG-B3000DB-1A2</h5>
                                <p>210AZN</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className='promotion-video'>
                <div className='vid-title'>
                    <h2>TANITIM VİDEOSU</h2>
                </div>
                <iframe width="100%" height="700" src="https://www.youtube.com/embed/jJ8XlgSJh2c?si=p6EChPKHAjnNLH5z"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                     encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
            <div className='feature'>
                <div className='title-1'>
                    <h3>XÜSUSİYYƏT</h3>
                </div>
                <div className='row'>
                    <div className='bg-1'>
                        <img src="./img/bg-watches1.avif" alt="" />
                    </div>
                    <div className='content'>
                        <p>Möhkəmlik, yığcam forma və yüngüllüyü birləşdirən:
                            Daha təkmilləşmiş iki nüvəli qoruyucu quruluş</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Watches