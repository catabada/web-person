import React, { Component } from 'react';
import Evaluate from './Evaluate';
import Cumulative from './Cumulative';

class Result extends Component {
        render() {
            return (
              <div>
              <div className="container">
                <h2 className ="my-h2">RESULT</h2>
  <div className="row">
    <div className="col-md-12">
      <div className="tab" role="tabpanel">
        {/* Nav tabs */}
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><i className="fa fa-question-circle" />Requiment</a></li>
          <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"><i className="fa fa-check-circle-o" />Evaluate</a></li>
          <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab"><i className="fa fa-cube" />Cumulative Lesson</a></li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content tabs">
          <div role="tabpanel" className="tab-pane fade in active" id="Section1">
            <ul>
            <b className = "requiment">Yêu cầu</b>
              <li>Tạo một trang Result trên đó liệt kê những gì mình đã làm/học được trong suốt quá trình làm bài tập nhóm. Dẫn link tới từng trang do SV đã làm.</li>
              <li>Tự đánh giá mình được bao nhiêu phần trăm trên 100% của bài tập nhóm</li>
            </ul>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Section2">
            <Evaluate />
          </div>
          <div role="tabpanel" className="tab-pane fade" id="Section3">
            <Cumulative />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

                   

              </div>
            );
        }
}

export default Result;