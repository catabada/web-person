import React, { Component } from 'react';

class Cumulative extends Component {
    render() {
        return (
            <div>
                <div className="row-cum">
                <div className ="col-lg-4">
                        <h2 className = "h2-result"><i className="fa fa-user"/>Person Website</h2>
                        <div>
                            <ul>
                                <li>Có thêm kiến thức về UX/UI.</li>
                                <li>Biết thêm về HTML, CSS, ReactJS.</li>
                                <li>Tạo được website cá nhân theo đúng yêu cầu.</li>
                            </ul>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                    <h2 className = "h2-result"><i className="fa fa-users"/>Group Website</h2>
                    <div>
                            <ul>
                                <li>Biết cách làm việc nhóm</li>
                                <li>Biết thêm khả năng làm việc trong tập thể của bản thân</li>
                                <li>Nhận ra được điểm yếu khi làm việc nhóm.</li>
                            </ul>
                        </div>
                    </div>
                    <div className ="col-lg-4">
                    <h2 className = "h2-result"><i className="fa fa-globe"/>Project Website</h2>
                    <div>
                            <ul>
                                <li>Biết thêm thông tin về quy trình của một đồ án</li>
                                <li>Biết cách quản lý thời gian</li>
                            </ul>
                        </div>
                    </div>
                    <div className = "col-lg-12">
                    <h2 className = "h2-result"><i className="fa fa-user"/>Nhận xét về nhóm</h2>
                    <ul>
                        <li>Mọi người đều có tinh thần học tập</li>
                        <li>Tiếp thu kiến thức nhanh</li>
                        <li>Công việc phân công không rõ ràng dẫn đến chậm tiến độ</li>
                    </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Cumulative;