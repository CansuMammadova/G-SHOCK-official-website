import React from 'react'
import Layout from '../../Components/Layout'
import './style.scss';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Home = () => {
  return (
    <Layout>
      <div className='slider'>
        <div className='slider-active slick-initialized slick-slider'>
          <div className='slick-list draggable'>
            <div className='slick-track'>
              <div className='single-slider'>
                <div className='container' style={{ display: 'flex' }}>
                  <div className='row justify-content-between align-items-center'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
                      <div className='hero-caption'
                        data-aos="fade-right"
                        data-aos-mirror="true"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1>Select Your New Perfect Style</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                        <div className='hero_btn'
                          data-aos="fade-right"
                          data-aos-mirror="true"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-sine">
                          <a href="" className='btn hero_btn'>Shop Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block'>
                    <div className='hero-img'>
                      <img src="./img/watch.png.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='new-product-area section-padding30'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title mb-70'>
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className='row'>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='single-new-pro mb-30 text-center'>
                  <div className='product-img'>
                    <img src="./img/new_product1.png.webp" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <span>$ 45,743</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='single-new-pro mb-30 text-center'>
                  <div className='product-img'>
                    <img src="./img/new_product2.png.webp" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <span>$ 45,743</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='single-new-pro mb-30 text-center'>
                  <div className='product-img'>
                    <img src="./img/new_product3.png.webp" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <span>$ 45,743</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='single-new-pro mb-30 text-center'>
                  <div className='product-img'>
                    <img src="./img/new_product2.png.webp" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>Thermo Ball Etip Gloves</h3>
                    <span>$ 45,743</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>


          </div>
        </div>
      </section>
      <div className='gallery-area'>
        <div className='container-fluid p-0 fix'>
          <div className='row'>
            <div className='col-xl-6 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery mb-30'>
                <div className='gallery-img big-img big1'>
                  <img src="./img/gallery1.png.webp" alt="" />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-gallery mb-30'>
                <div className='gallery-img big-img big2'>
                  <img src="./img/gallery2.png.webp" alt="" />
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-12'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-6 col-sm-6'>
                  <div className='single-gallery mb-30'>
                    <div className='gallery-img small-img small1'>
                      <img src="./img/gallery3.png.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className='col-xl-12 col-lg-12  col-md-6 col-sm-6'>
                  <div className='single-gallery mb-30'>
                    <div className='gallery-img small-img small2'>
                      <img src="./img/gallery4.png.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='popular-items section-padding30'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-8 col-md-10'>
              <div className='section-tittle mb-70 text-center'>
                <h2>Popular Items</h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular1.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular2.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular3.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular4.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular5.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-popular-items'>
                <div className='popular-img'>
                  <img src="/img/popular6.png.webp" alt="" />
                  <div className='img-cap'>
                    <span>Add to cart</span>
                  </div>
                  <div className='favorit-items'>
                    <span className='flaticon-heart'></span>
                  </div>
                </div>
                <div className='popular-caption'>
                  <h3>
                    <a href="">Thermo Ball Etip Gloves</a>
                  </h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='room-btn'>
              <a href="" className='btn view-btn1'>View More Products</a>
            </div>
          </div>
        </div>
      </div>
      <div className='video-area mb-100'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <div className='video-wrap'>
                <div className='play-btn'>
                  <a className='popup-video'
                    href="https://www.youtube.com/watch?v=KMc6DyEJp04">
                    <i className='fas fa-play'></i></a></div>
              </div>
            </div>
          </div>
          <div className='thumb-content-box'>
            <div className='thumb-content'>
              <h3>Next Video</h3>
              <a href="#">
                <i className='flaticon-arrow'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='watch-area section-padding30'>
        <div className='container'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-5 col-md-6'>
              <div className='watch-details mb-40'>
                <h2>Watch of Choice</h2>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <a href="shop.html" className='btn'>Show Watches</a>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 col-sm-10'>
              <div className='choice-watch-img mb-40'>
                <img src="./img/choce_watch1.png.webp" alt="" />
              </div>
            </div>
          </div>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-6 col-md-6 col-sm-10'>
              <div className='choice-watch-img mb-40'>
                <img src="./img/choce_watch2.png.webp" alt="" />
              </div>
            </div>
            <div className='col-lg-6 col-md-6'>
              <div className='watch-details mb-40'>
                <h2>Watch of Choice</h2>
                <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                <a href="shop.html" className='btn'>Show Watches</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shop-method-area'>
        <div className='container'>
          <div className='method-wrapper'>
            <div className='row d-flex justify-content-between'>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='single-method mb-40'>
                  <i className='ti-package'></i>
                  <h6>Free Shipping Method</h6>
                  <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='single-method mb-40'>
                  <i className='ti-unlock'></i>
                  <h6>Secure Payment System</h6>
                  <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='single-method mb-40'>
                  <i className='ti-reload'></i>
                  <h6>Secure Payment System</h6>
                  <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home