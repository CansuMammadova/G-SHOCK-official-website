import React from 'react'
import './style.css';

const Cart = () => {
  return (
    <div className='cart'>
      <div className='slider'>
        <h2>Cart List</h2>
      </div>
      <div className='cart-area'>
        <div className='container'>
          <div className='cart-inner'>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='media'>
                        <div className='d-flex'>
                          <img src="./img/card1.png.webp" alt="" />
                        </div>
                        <div className='media-body'>
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td><h5>$360.00</h5></td>
                    <td>
                      <div className='product-count'>
                        <span className='input-number-decrement'>
                          <i className='ti-minus'></i>
                        </span>
                        <input className='input-number' type="text" value="1" min="0" max="10"></input>
                        <span className='input-number-increment'>
                          <i className='ti-plus'></i>
                        </span>
                      </div>
                    </td>
                    <td><h5>$720.00</h5></td>
                  </tr>
                  <tr>
                    <td>
                      <div className='media'>
                        <div className='d-flex'>
                          <img src="./img/card2.png.webp" alt="" />
                        </div>
                        <div className='media-body'>
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td><h5>$360.00</h5></td>
                    <td>
                      <div className='product-count'>
                        <span className='input-number-decrement'>
                          <i className='ti-minus'></i>
                        </span>
                        <input className='input-number' type="text" value="1" min="0" max="10"></input>
                        <span className='input-number-increment'>
                          <i className='ti-plus'></i>
                        </span>
                      </div>
                    </td>
                    <td><h5>$720.00</h5></td>
                  </tr>
                  <tr className='bottom-button'>
                    <td>
                      <a className='btn-1' href="#">Update Cart</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className='cupon-text'>
                        <a className='btn-1' href="#">Close Coupon</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td><h5>Subtotal</h5></td>
                    <td><h5>$2160.00</h5></td>
                  </tr>
                  <tr className='shipping-area'>
                    <td></td>
                    <td></td>
                    <td><h5>Shipping</h5></td>
                    <td>
                      <div className='shipping-box'>
                        <ul className='list'>
                          <li>Flat Rate: $5.00</li>
                          <li>Free Shipping</li>
                          <li>Flat Rate: $10.00</li>
                          <li>Local Delivery: $2.00 </li>
                        </ul>
                        <h6>Calculate Shipping
                          <i className='fa fa-caret-down' aria-hidden="true"></i>
                        </h6>
                        <select className='shipping-select'>
                          <option value="1">Bangladesh</option>
                          <option value="2">India</option>
                          <option value="3">Pakistan</option>
                        </select>
                        <div className='nice-select shipping-select' tabindex="0">
                          <span className='current'>Bangladesh</span>
                          <ul className='list'>
                            <li data-value="1" className='option selected focus'>Bangladesh</li>
                            <li data-value="2" className='option'>India</li>
                            <li data-value="4" className='option'>Pakistan</li>
                          </ul>
                        </div>
                        <select className='shipping-select-state'>
                          <option value="1">Select a State</option>
                          <option value="2">Select a State</option>
                          <option value="3">Select a State</option>
                        </select>
                        <div className='nice-select shipping-select' tabindex="0">
                          <span className='current'>Select a State</span>
                          <ul className='list'>
                            <li data-value="1" className='option selected focus'>Select a State</li>
                            <li data-value="2" className='option'>Select a State</li>
                            <li data-value="4" className='option'>Select a State</li>
                          </ul>
                        </div>
                        <input className='post-code' type="text" placeholder="Postcode/Zipcode"></input>
                        <a className='btn-1' href="#">Update Details</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='checkout-btn-inner'>
                <a className='btn-1' href="#">Continue Shopping</a>
                <a className='checkout-btn-1' href="#">Proceed to checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart