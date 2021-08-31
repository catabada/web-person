import React, { Component } from 'react';
import FPTShop from './FPTShop';

class Lab4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          select:1  
        }
      };
      setSelect = (num) => {
        this.setState({select:num})
      }
      selectOption = () => {
        switch (this.state.select) {
          case 1:
            return <div>
              <p>
                <b className = "requiment">Yêu cầu:</b> <br/>
                <ul>
                  <li>Tạo một trang Web có nội dung bất kỳ, sử dụng linh hoạt tất cả những phần sau:</li>
                  <ul>
                    <li>Input Controls</li>
                    <li>Navigation</li>
                    <li>Animation</li>
                    <li>Default settings</li>
                    <li>Guided Actions</li>
                  </ul>
                  <li>Có biểu mẫu liên hệ</li>
                </ul>
              </p>
            </div>
          case 2:
            return <div>
              <img src="template/img/design-fptshop.png" alt="" />
            </div>
          case 3:
            return <FPTShop />
        }
      }
        render() {
            return (
              <div>
                        <div className="tab-lab-1">
                          <div className={this.state.select == 1 ? "selected element-lab-1" :"element-lab-1"} onClick={() => this.setSelect(1)}>
                            Requiment
                          </div>
                          <div className={this.state.select == 2 ? "selected element-lab-1" :"element-lab-1"} onClick={() => this.setSelect(2)}>
                            Design
                          </div>
                          <div className={this.state.select == 3 ? "selected element-lab-1" :"element-lab-1"} onClick={() => this.setSelect(3)}>
                          Implement
                          </div>
                        </div>

                        <div className = "tab-lab-content">
                          {this.selectOption()}
                        </div>
              </div>
            );
        }
}

export default Lab4;