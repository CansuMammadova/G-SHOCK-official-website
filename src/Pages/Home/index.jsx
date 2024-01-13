import React from 'react'
import Layout from '../../Components/Layout'
import './style.scss';

const Home = () => {
  return (
    <Layout>
      <div className='slider'>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-8'>
              <div className='hero-caption'>
                <h1>Select Your New Perfect Style</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                <button>Shop Now</button>
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
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-new-pro mb-30 text-center'>
                <div className='product-img'>
                  <img src="./img/new_product1.png.webp" alt="" />
                </div>
                <div className='product-caption'>
                  <h3>Thermo Ball Etip Gloves</h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-new-pro mb-30 text-center'>
                <div className='product-img'>
                  <img src="./img/new_product2.png.webp" alt="" />
                </div>
                <div className='product-caption'>
                  <h3>Thermo Ball Etip Gloves</h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
              <div className='single-new-pro mb-30 text-center'>
                <div className='product-img'>
                  <img src="./img/new_product3.png.webp" alt="" />
                </div>
                <div className='product-caption'>
                  <h3>Thermo Ball Etip Gloves</h3>
                  <span>$ 45,743</span>
                </div>
              </div>
            </div>
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
    </Layout>
  )
}

export default Home