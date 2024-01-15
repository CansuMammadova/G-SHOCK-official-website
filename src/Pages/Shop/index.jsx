import React from 'react'
import './style.scss';
import Layout from '../../Components/Layout';

const Shop = () => {
  return (
    <Layout>
      <div className='shop'>
        <div className='slider'>
          <h2>Watch Shop</h2>
        </div>
        <div className='popular-items'>
          <div className='container'>
            <div className='row product-btn justify-content-between mb-40'>
              <div className='properties-button'>
                <nav>
                  <div className='nav-tabs'>
                    <a href="#" className='nav-link'>NewestArrival</a>
                    <a href="#" className='nav-link'>Price High To Low</a>
                    <a href="#" className='nav-link'>Most Popular</a>
                  </div>
                </nav>
              </div>
              <div className='select-this'>
                <form action="">
                  <div className='select-items'>
                    <select className='select'>
                      <option value="1">40 per page</option>
                      <option value="2">50 per page</option>
                      <option value="3">60 per page</option>
                      <option value="4">70 per page</option>
                    </select>
                    <div className='select-open'>
                      <span className='current'>
                        <ul className='list'>
                          <li className='option'>40 per page</li>
                          <li className='option'>50 per page</li>
                          <li className='option'>60 per page</li>
                          <li className='option'>70 per page</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='tab-content'>
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
      </div></Layout>
  )
}

export default Shop