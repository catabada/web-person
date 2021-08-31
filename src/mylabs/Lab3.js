import React, { Component } from 'react';
import FPattern from './FPattern';
import ZPattern from './ZPattern';


class Lab3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          select:1 ,
          pattern:1,
          option:1
        }
      };
      setSelect = (num) => {
        this.setState({select:num, pattern:num-1})
      }
      setOption = (num) => {
        this.setState({option:num})
      }
      selectOptionPattern = () => {
        switch (this.state.option) {
          case 1:
            if(this.state.pattern == 1)
            return <div>
              <img src="template/img/design-fpattern.png" alt="" />
            </div>
            else return <div>
               <img src="template/img/design-zpattern.png" alt="" />
            </div>
          case 2:
            if(this.state.pattern == 1)
            return <FPattern />
            else return <ZPattern />
          default:
            break;
        }

      }
      selectOption = () => {
        switch (this.state.select) {
          case 1:
            return <div>
              <strong className= "requiment">Yêu cầu:</strong> <br/>
              <ul>
                <li>Trong menu Labs, tạo 1 menu Lab3 (file lab3.html) sau đó tạo 2 tab Ex1, Ex2</li>
                <li>Ex1: Thiết kế một trang Web đơn giản sử dụng mẫu F-pattern
                    --&gt; chuyển sang html (ex1.html)</li>
                <li>Ex2: Thiết kế một trang Web đơn giản sử dụng mẫu Z-pattern
                        ==&gt; chuyển sang html (ex2.html)</li> 
                <ul>
                         <li>Design: chụp lại hình ảnh để có cái nhìn tổng quan về file thiết kế,
                                  có nút Download để download file thiết kế về nếu muốn</li> 
                          <li>Implementation: nội dung phần hiện thực trên html</li>
                </ul>
                <li>Upload lên Firebase / Github</li>

              </ul>     
              
            </div>
          case 2:
            return <div>
                  <div className = "tab-option">
                          <div className = {this.state.option == 1 ?"option-selected option":"option"} onClick ={() => this.setOption(1)}>
                            Design
                          </div>
                          <div className =  {this.state.option == 2 ?"option-selected option":"option"}onClick ={() => this.setOption(2)}>
                            Implement
                          </div>
                        </div>
                        <div className ="tab-lab-option-content">
                                {this.selectOptionPattern()}
                        </div>
                   
            </div>
          case 3:
            return <div>
               <div className = "tab-option">
                          <div className = {this.state.option == 1 ?"option-selected option":"option"} onClick ={() => this.setOption(1)}>
                            Design
                          </div>
                          <div className =  {this.state.option == 2 ?"option-selected option":"option"}onClick ={() => this.setOption(2)}>
                            Implement
                          </div>
                        </div>
                        <div className = "tab-lab-option-content">
                          {this.selectOptionPattern()}
                        </div>
            </div>
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
                           F-Pattern
                          </div>
                          <div className={this.state.select == 3 ? "selected element-lab-1" :"element-lab-1"} onClick={() => this.setSelect(3)}>
                          Z-Pattern
                          </div>
                          
                        </div>
                        <div className="tab-lab-content">
                      {this.selectOption()}
                    </div>
                      
              </div>
            );
        }
}

export default Lab3;