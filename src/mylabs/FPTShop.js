import React, { Component } from 'react';

class FPTShop extends Component {
    render() {
        return (
            <div>
            <div className = "container-fptshop">
              <div className = "row-logo-search">
                <img src="template/img/fptshop.png" className = "fptshop-logo" alt="" />
                <input className ="input-search" type="text" value="" placeholder="Nhập tên điện thoại, máy tính, phụ kiện,... cần tìm " />
                <button class="btn btn-outline-success my-2 my-sm-0 btn-search" type="submit">Search</button>
              </div>
              <nav>
                <div className = "row navbar-nav">
                  <a className = "nav-link" href=""><i className="fa fa-mobile"/>Điện thoại</a>
                  <a className = "nav-link" href=""><i className="fa fa-laptop"/>Laptop</a>
                  <a className = "nav-link" href=""><i className="fa fa-apple"/>Apple</a>
                  <a className = "nav-link" href="">Đồng hồ</a>
                  <a className = "nav-link" href=""><i className="fa fa-headphones"/>Phụ kiện</a>
                  <a className = "nav-link" href="">Máy cũ giá rẻ</a>
                  <a className = "nav-link" href=""><i className="fa fa-tablet"/>Tablet</a>
                </div>
              </nav>
              <div className = "row-breadcrum">
                <a className ="nav-link" href="">Trang chủ/</a>
                <a className ="nav-link" href="">Máy tính xách tay/</a>
                <a className ="nav-link" href="">MSI</a>
              </div>
              <div className ="row">
                <div className="col-md-8">
                  <p className = "name-product">Laptop MSI Gaming GF65 10UE 286VN i5 10500H/16GB/512GB/15.6FHD/RTX 3060 Max-Q 6Gb/Win 10</p>
                </div>
                <div className="col-md-4 col-evaluate">
                  <span>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <i className ="fa fa-star"></i>
                    <a href="">100 Đánh giá </a>| <a href="">12 Hỏi & đáp</a>
                  </span>
                </div>
               
              </div>
              <hr/>
              <div className ="row">
                <div class="col-md-6">
                    <img src="template/img/msi-1.jpg" alt="" />
                    <div className = "row-property">
                  <ul>
                    <li>15.6", 1920 x 1080 Pixel, IPS, 144 Hz</li>
                    <li>Intel Core i5-10300H</li>
                    <li>16 GB, DDR4, 3200 MHz</li>
                    <li>SSD 512 GB</li>
                    <li>NVIDIA GeForce RTX 3060 6GB</li>
                   <a href=""> Xem chi tiết thông số</a>
                  </ul>
                  
                </div>
                </div>
                <div class="col-md-6 ">
                  <div className = "row">
                  <div className ="col-md-8 col-price">
                  <p className ="price-reduce">29.290.000đ</p>
                  <p class="price-real">29.490.000₫</p>
                  </div>
                  <div className ="col-md-4">
                      <p>Trả góp chỉ từ <b>2.587.500₫</b>/tháng</p>
                    </div>
                  </div>
                 
                 
                  <div className ="row-radio">
                    <div className ="title-3in1">
                    Chọn 1 trong 3 khuyến mãi sau
                    </div>
                   <div>
                                <ul>
                                  <li> <div className="form-check">
                                          <input className="" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                                          <label className="" htmlFor="exampleRadios1">
                                         <b> Hoàn tiền 200.000đ</b>
                                          </label>
                                        </div>
                                        </li>
                                  <li> 
                                    <div className="form-check">
                                          <input className="" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                                          <label className="form-check-label" htmlFor="exampleRadios2">
                                         <b> Giảm ngay 1.000.000đ khi mua Online </b>
                                          </label>
                                        </div>
                                        </li>
                                  <li>
                                    <div className="form-check">
                                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3"  />
                                          <label className="form-check-label" htmlFor="exampleRadios3">
                                          <b>Tặng PMH Phụ Kiện 1.000.000đ</b>
                                          </label>
                                        </div>
                                        </li>
                                </ul>
 
                          </div>

                  </div>

                    <div className = "row-endow">
                      <div className ="endow-title">
                      <p className = "endow">Ưu đãi thêm</p>
                      </div>
                      
                      <div className = "row">
                        <ul>
                          <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>Tặng Balo Laptop</li>
                          <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>Tặng PMH 300.000đ mua máy in HP</li>
                          <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>Thu cũ đổi mới - Trợ giá ngay 15%</li>
                          <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>Giảm ngay 5% tối đa 300.000đ khi thanh toán Online 100% qua VNPAY-QR. Mã khuyến mại VNPAY300 (Chọn hình thức thanh toán ATM nội địa/QR CODE/Internet Banking)</li>
                          <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>Cơ hội trúng 100 vé bay miễn phí</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className = "row-btn">
                      <div className = "col-sm-12">
                      <button type="button" className ="btn-12">
                        <div>
                          MUA NGAY
                        </div>
                        <p>Giao hàng miễn phí hoặc nhận tại shop</p>
                      </button>
                      </div>
                     
                      <div className ="col-sm-6">
                        <button type="button" className = "btn-6">
                          <div>
                          TRẢ GÓP 0%
                          </div>
                          <p>Duyệt nhanh qua điện thoại</p>
                        </button>
                      </div>
                      <div className ="col-sm-6">
                        <button type="button" className = "btn-6">
                          <div>
                          TRẢ GÓP QUA THẺ
                          </div>
                          <p>Visa, Master Card, JCB</p>
                        </button>
                      </div>
                      
                    </div>


                </div>
                
              </div>
              <hr/>
              <div className = "row-contact">
                  <h2>Contact</h2>
                  <input type="text" name="" value="" placeholder="Enter Your Name" />
                  <input type="email" name="" value="" placeholder="Enter Your Email" />
                  <textarea rows="5" cols="150" placeholder="Message"></textarea>
              </div>
              
            </div>
         

            </div>
        );
    }
}

export default FPTShop;
