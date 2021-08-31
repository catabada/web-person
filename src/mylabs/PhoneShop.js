import React, { Component } from 'react';

class PhoneShop extends Component {
    render() {
        return (
            <div>
                <main className="page">
  <section className="shopping-cart dark">
    <div className="container container-phoneshop">
      <div className="block-heading">
        <h2><b>PHONE SHOP</b></h2>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="items">
              <div className="product">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid mx-auto d-block image" src="template/img/iphonex.png" />
                  </div>
                  <div className="col-md-8">
                    <div className="info">
                      <div className="row">
                        <div className="col-md-5 product-name">
                          <div className="product-name">
                            <a href="https://vi.wikipedia.org/wiki/IPhone_X">IPHONE X</a>
                            <div className="product-info">
                              <div>Display: <span className="value">5.8 inch</span></div>
                              <div>RAM: <span className="value">3GB</span></div>
                              <div>Memory: <span className="value">256GB</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 quantity">
                          <label htmlFor="quantity">Quantity:</label>
                          <input id="quantity" type="number" defaultValue={1} className="form-control quantity-input" />
                        </div>
                        <div className="col-md-3 price">
                          <span style={{float: 'left'}} className="priceIpX">640</span>
                          <p>$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid mx-auto d-block image" src="template/img/iphone11.png" />
                  </div>
                  <div className="col-md-8">
                    <div className="info">
                      <div className="row">
                        <div className="col-md-5 product-name">
                          <div className="product-name">
                            <a href="https://vi.wikipedia.org/wiki/IPhone_11">IPHONE 11</a>
                            <div className="product-info">
                              <div>Display: <span className="value">6.1 inch</span></div>
                              <div>RAM: <span className="value">4GB</span></div>
                              <div>Memory: <span className="value">256GB</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 quantity">
                          <label htmlFor="quantity">Quantity:</label>
                          <input id="quantity" type="number" defaultValue={1} className="form-control quantity-input" />
                        </div>
                        <div className="col-md-3 price">
                          <span style={{float: 'left'}} className="priceIp11">1040</span>
                          <p>$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product">
                <div className="row">
                  <div className="col-md-3">
                    <img className="img-fluid mx-auto d-block image" src="template/img/iphone12.jpg" />
                  </div>
                  <div className="col-md-8">
                    <div className="info">
                      <div className="row">
                        <div className="col-md-5 product-name">
                          <div className="product-name">
                            <a href="https://vi.wikipedia.org/wiki/IPhone_12">IPHONE 12</a>
                            <div className="product-info">
                              <div>Display: <span className="value">6.7 inch</span></div>
                              <div>RAM: <span className="value">4GB</span></div>
                              <div>Memory: <span className="value">256GB</span></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 quantity">
                          <label htmlFor="quantity">Quantity:</label>
                          <input id="quantity" type="number" defaultValue={1} className="form-control quantity-input" />
                        </div>
                        <div className="col-md-3 price">
                          <span style={{float: 'left'}} className="priceIp12">1520</span>
                          <p>$</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="summary">
              <h3>Summary</h3>
              <div className="summary-item">
                <span className="text">Total</span>
                <span className="price priceTotal">$0</span>
              </div>
              <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

            </div>
        );
    }
}

export default PhoneShop;