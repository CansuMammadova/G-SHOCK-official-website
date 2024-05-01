import React from 'react'
import Layout from '../../Components/Layout'
import './style.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";


const Details = () => {
  return (
    <Layout>
      <div className='details'>
        <div className='slider'>
          <h2>Watch Shop</h2>
        </div>
        <div className='product-img-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <Swiper className="mySwiper">
                <SwiperSlide>
                  <div className='col-lg-12'>
                    <div className='owl-carousel'>
                      <div className='owl-stage-outer'>
                        <div className='owl-stage'>
                          <div className='owl-stage cloned'>
                            <div className='single-product-img'>
                              <img src="./img/gallery1.png.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='col-lg-12'>
                    <div className='owl-carousel'>
                      <div className='owl-stage-outer'>
                        <div className='owl-stage'>
                          <div className='owl-stage cloned'>
                            <div className='single-product-img'>
                              <img src="./img/gallery01.png.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='col-lg-12'>
                    <div className='owl-carousel'>
                      <div className='owl-stage-outer'>
                        <div className='owl-stage'>
                          <div className='owl-stage cloned'>
                            <div className='single-product-img'>
                              <img src="./img/gallery1.png.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='col-lg-12'>
                    <div className='owl-carousel'>
                      <div className='owl-stage-outer'>
                        <div className='owl-stage'>
                          <div className='owl-stage cloned'>
                            <div className='single-product-img'>
                              <img src="./img/gallery01.png.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className='col-lg-8'>
                <div className='single-product-text'>
                  <h3>Foam filling cotton slow
                    <br />rebound pillows
                  </h3>
                  <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.
                    Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness.
                    Credibly innovate granular internal or organic sources whereas high standards in web-readiness.
                    Energistically scale future-proof core competencies vis-a-vis impactful experiences.
                    Dramatically synthesize integrated schemas. with optimal networks.</p>
                  <div className='card-area'>
                    <div className='product-count-area'>
                      <p>Quantity</p>
                      <div className='product-count'>
                        <span className='product-count-items decrement'>
                          <i className='fa fa-minus'></i>
                        </span>
                        <span className='product-count-items increment'>
                          <i className='fa fa-plus'></i>
                        </span>
                      </div>
                      <p>5$</p>
                    </div>
                    <div className='add-to-cart'>
                      <a href="#" className='btn_3'>add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='subscribe-part section-padding'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='subscribe-part-content'>
                  <h2>Get promotions & updates!</h2>
                  <p>Seamlessly empower fully researched growth strategies and
                    interoperable internal or “organic” sources credibly innovate granular internal .</p>
                  <div className='subscribe-form'>
                    <input type="email" placeholder='Enter your mail' />
                    <a href="#" className='btn_1'>Subscribe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout >
  )
}

export default Details