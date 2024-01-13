import React from 'react'
import Layout from '../../Components/Layout'
import './style.scss';

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
              <div className='col-lg-12'>
                <div className='owl-carousel'>
                  <div className='owl-stage-outer'>
                    <div className='owl-stage'>
                      <div className='owl-stage cloned'>
                        <div className='single-product-img'>
                          <img src="./img/gallery01.png.webp" alt="" />
                        </div>
                      </div>
                      {/* <div className='owl-stage cloned'>
                        <div className='single-product-img'>
                          <img src="./img/gallery1.png.webp" alt="" />
                        </div>
                      </div>
                      <div className='owl-stage '>
                        <div className='single-product-img'>
                          <img src="./img/gallery1.png.webp" alt="" />
                        </div>
                      </div>
                      <div className='owl-stage '>
                        <div className='single-product-img'>
                          <img src="./img/gallery1.png.webp" alt="" />
                        </div>
                      </div>
                      <div className='owl-stage active'>
                        <div className='single-product-img'>
                          <img src="./img/gallery01.png.webp" alt="" />
                        </div>
                      </div>
                      <div className='owl-stage cloned'>
                        <div className='single-product-img'>
                          <img src="./img/gallery1.png.webp" alt="" />
                        </div>
                      </div>
                      <div className='owl-stage cloned'>
                        <div className='single-product-img'>
                          <img src="./img/gallery01.png.webp" alt="" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
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
                          <i className='ti-minus'></i>
                        </span>
                        <span className='product-count-items increment'>
                          <i className='ti-plus'></i>
                        </span>
                      </div>
                      <p>5$</p>
                    </div>
                    <div className='add-to-cart'>
                      {/* <button>ADD TO CART</button> */}
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
                      <div className='btn'>
                      <button>Subscribe</button>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Details