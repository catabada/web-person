import React, { Component } from 'react';

class Evaluate extends Component {
    render() {
        return (
            <div>
                <div className="row-result">
                    <div className ="col-lg-4">
                        <h2 className = "h2-result"><i className="fa fa-user"/>Person Website</h2>
                        <div>
                            <ul>
                                <li>Làm bài tập đầy đủ</li>
                                <li>Hoàn thành đúng yêu cầu bài tập</li>
                                <li>Hoàn chỉnh được website cá nhân</li>
                            </ul>
                        </div>
                        <div>
                            <p>Hoàn thành: 100%</p>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                    <h2 className = "h2-result"><i className="fa fa-users"/>Group Website</h2>
                    <div>
                            <ul>
                                <li>Chỉ nhóm cách sử dụng Github, Firebase</li>
                                <li>Chuyển web sang react</li>
                                <li>Chỉnh sửa, cập nhật đầy đủ Group diary</li>
                                <li>Hoàn thành tương đối đầy đủ các nhiệm vụ được giao</li>
                            </ul>
                        </div>
                        <div>
                            <p>Hoàn thành: 100%</p>
                            <p>Đóng góp: 20%</p>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                    <h2 className = "h2-result"><i className="fa fa-globe"/>Project Website</h2>
                    <div>
                            <ul>
                                <li>Chức năng đăng ký</li>
                                <li>Chức năng đăng nhập</li>
                                <li>Chuyển web sang react</li>
                            </ul>
                        </div>
                        <div>
                            <p>Hoàn thành: 100%</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Evaluate;