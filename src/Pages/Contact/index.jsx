import React from 'react'
import './style.scss'
import Layout from '../../Components/Layout';

const Contact = () => {
  return (
    <Layout><div className="contact">
    <div className="container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
        width='100%'
        height={480}
        frameBorder="0"
        style={{ border: 0, marginBottom: 80 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Humanity First Indonesia"
      />
          <div className="form-container">
            <h2>Get in Touch</h2>
            <div className="form-contact-container">
              <form className="form-contact">
                <textarea class="form-control" placeholder="Enter Message" />
                <div className="name-container">
                  <input className="form-control" type='text' placeholder="Enter your name" />
                  <input className="form-control" type='email' placeholder="Enter your email" />
                </div>
                <input className="form-control" type='email' placeholder="Enter subject" />
                <button type="submit">Send</button>
              </form>
              <div className="contact-boxes">
                <div className="contact-box">
                  <span><i class="fa fa-home" aria-hidden="true"></i></span>
                  <div className="media-body">
                    <h3>Buttonwood, California.</h3>
                    <p>Rosemead, CA 91770</p>
                  </div>
                </div>
                <div className="contact-box">
                  <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                  <div className="media-body">
                    <h3>+1 253 565 2365</h3>
                    <p>Mon to Fri 9am to 6pm</p>
                  </div>
                </div>
                <div className="contact-box">
                  <span><i class="fa fa-tablet" aria-hidden="true"></i></span>
                  <div className="media-body">
                    <h3>support@colorlib.com</h3>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div></Layout>
  )
}

export default Contact