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
      <div className='first'>
        <div className='container' style={{ display: 'flex' }}>
        </div>
      </div>
      <div className='second'>
        <div className='container' style={{ display: 'flex' }}>
        </div>
      </div>
      <section className='new-product-area'>
        {/* <div className='container'> */}
          <div className='row'>
            <div className='tittle'>
              <h2>POPULAR PRODUCTS</h2>
            </div>
          </div>
          <div className='row'>

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
                    <img src="./img/img1.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GA-B001CBR-1A</h5>
                    <span>210AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img2.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GA-B001CBR-2A</h5>
                    <span>210AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img3.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GA-B001CBRS-6A</h5>
                    <span>290AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img4.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GWG-B1000-1A</h5>
                    <span>265AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img5.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GWG-B1000-1A4</h5>
                    <span>280AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img6.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK </h3>
                    <h5>GWG-B1000-3A</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img7.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h5>G-SHOCK</h5>
                    <h5>GMA-S2200PE-3A</h5>
                    <span>290AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img8.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GMA-S2200PE-5A</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img9.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GMA-S2200PE-6A</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img10.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GM-5640GEM-2</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img11.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GM-5640GEM-3</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='new-pro'>
                  <div className='product-img'>
                    <img src="./img/img12.avif" alt="" />
                  </div>
                  <div className='product-caption'>
                    <h3>G-SHOCK</h3>
                    <h5>GM-5640GEM-1</h5>
                    <span>320AZN</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>


          </div>
        {/* </div> */}
      </section>
      <div className='video-area mb-100'>
        <div className='row'>
          <div className='play-btn'>
            <a className='popup-video'
              href="https://youtu.be/qqh0uQa2nzc">
              <i className='fa fa-play'></i></a></div>
        </div>
      </div>
    </Layout>
  )
}

export default Home