import React from 'react'
import './style.scss';
import Layout from '../../Components/Layout';

const About = () => {
  return (
    <Layout><div className='about'>
      <div className='slider'>
        <h2>About</h2>
      </div>
      <div className='about-details'>
        <div className='container'>
          <div className='row'>
            <div className='offset-xl-1 col-lg-8'>
              <div className='about-details-cap'>
                <h4>Our Mission</h4>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore
                  et dolore magna aliqua. Quis ipsum suspendisces gravida.
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                <div className='about-details-cap mb-50'>
                  <h4>Our Vision</h4>
                  <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore
                    et dolore magna aliqua. Quis ipsum suspendisces gravida.
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                  </p>
                  <p> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                </div>
              </div>
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
      <div className='shop-method-area'>
        <div className='container'>
          <div className='method-wrapper'>
            <div className='row d-flex justify-content-between'>
              <div className='col-xl-4 col-lg-4 col-md-6'>
                <div className='single-method'>
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

export default About