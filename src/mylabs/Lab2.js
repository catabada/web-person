import React, { Component } from 'react';
import PhoneShop from './PhoneShop';

class Lab2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          select:1  
        }
        this.selectOption = this.selectOption.bind(this);
      };
      setSelect = (num) => {
        this.setState({select:num})
      }
      selectOption = () => {
        switch (this.state.select) {
          case 1:
          return <div>
            <p>
              <strong className = "requiment">Yêu cầu: </strong> <br/>
              <ul>
                <li>(1) Tạo ra một user scenario</li>
                <li>(2) Chọn 1 bước trong user scenario để thiết kế 1 form giao diện Web trên công cụ thiết kế đã chọn.
                  Sau đó tạo ra file html tương ứng cho thiết kế này.</li>
                <li>Upload lên Firebase / github: trong file html có chèn hình ảnh của user scenario ở (1) và đường dẫn của file thiết kế ở (2).</li>
              </ul>
            </p>
          </div>
          case 2:
            return <div>
              <img className="img-responsive" src="template/img/user.png" alt=""/>

            </div>
          case 3: 
          return <div>
           <img src="template/img/phone-shop.png" alt="" />
          </div>
          case 4: 
          return <PhoneShop />
        }
      }
        render() {
            return (
              <div>
                        <div className="tab-lab-2">
                          <div className={this.state.select == 1 ? "selected element-lab-2" :"element-lab-2"} onClick={() => this.setSelect(1)}>
                            Requiment
                          </div>
                          <div className={this.state.select == 2 ? "selected element-lab-2" :"element-lab-2"} onClick={() => this.setSelect(2)}>
                            User Scenario
                          </div>
                          <div className={this.state.select == 3 ? "selected element-lab-2" :"element-lab-2"} onClick={() => this.setSelect(3)}>
                            Design
                          </div>
                          <div className={this.state.select == 4 ? "selected element-lab-2" :"element-lab-2"} onClick={() => this.setSelect(4)}>
                          Implement
                          </div>
                          
                        </div>

                        <div className="tab-lab-content">
                          {this.selectOption()}
                        </div>
              </div>
            );
        }
}

export default Lab2;