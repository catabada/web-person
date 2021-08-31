import React, { Component } from 'react';

class Lab1 extends Component {
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
        <p className = "lab-requiment"><b className="requiment">Yêu cầu:</b> Chọn 1 đối tượng bất kỳ trong thế giới thực, ví
                    dụ lớp môn học, giảng viên,… Sau đó thiết kế chức năng Quản lý đối
                    tượng đó trên html bao gồm các tính năng thêm, sửa, xóa, tìm
                    kiếm cho đối tượng đó. Ví dụ, làm chức năng Quản lý Sinh viên,
                    bao gôm tính năng thêm, sửa, xóa, tìm kiếm. Chú ý: Các thành
                    viên trong nhóm không được chọn các đối tượng giống nhau.</p>
    </div>;
    case 2: 
    return <div>
      <img src="template/img/student-manager.png" alt="" />
    </div>

    case 3:
      return  <div>
         <h3 className="manager">STUDENT MANAGER</h3>
            <div className= "row">
              <div className="form-group col-md-6">
                <input type="text" placeholder="Full Name"/>
              </div>
              <div className="form-group col-md-6">
                <input type="date" placeholder="Date of birth" />
              </div>
              <div className="form-group col-md-6">
              <label> Gender </label> <br/>
              <div class="form-check">
                   <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                       Male
                      </label>
              <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                           Female
                    </label>
              </div>
              </div>
              </div>
            
              <div className="form-group col-md-6">
                <input type="text" placeholder="Id student"/>
              </div>
              <div className="form-group col-md-6">
                <input type="text" placeholder="Class"/>
              </div>
              <div className="form-group col-md-6">
                <input type="email" placeholder="Email"/>
              </div>
            </div>

        <nav className="navbar navbar-light bg-light justify-content-between">
    <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
  </form>
</nav>
   
<table className="table table-striped">
  <thead>
    <tr>
      <th className="stt" scope="col ">STT</th>
      <th scope="col">FULL NAME</th>
      <th scope="col">DATE OF BIRTH</th>
      <th scope="col">GENDER</th>
      <th scope="col">ID STUDENT</th>
      <th scope="col">CLASS</th>
      <th scope="col">OPTION</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Huỳnh Hữu Ân </td>
      <td>25-9-2001</td>
      <td>Nam</td>
      <td>19130002</td>
      <td>DH19DTA</td>
      <td> <i className="fa fa-remove" /> <i className="fa fa-edit" /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Huỳnh Văn Hữu Ân</td>
      <td>03-10-2001</td>
      <td>Nam</td>
      <td>19130003</td>
      <td>DH19DTB</td>
      <td> <i className="fa fa-remove" /> <i className="fa fa-edit" /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Đỗ Thanh Bình</td>
      <td>15-11-2001</td>
      <td>Nam</td>
      <td>19130017</td>
      <td>DH19DTA</td>
      <td> <i className="fa fa-remove" /> <i className="fa fa-edit" /></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Lê Minh Chánh</td>
      <td>none</td>
      <td>Nam</td>
      <td>19130022</td>
      <td>DH19DTC</td>
      <td> <i className="fa fa-remove" /> <i className="fa fa-edit" /></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Nguyễn Minh Châu</td>
      <td>none</td>
      <td>Nam</td>
      <td>19130022</td>
      <td>DH19DTA</td>
      <td> <i className="fa fa-remove" /> <i className="fa fa-edit" /></td>
    </tr>
  </tbody>
</table>
      </div>
      default:
        break;
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


                    <div className= "tab-lab-content">
                      {this.selectOption()}
                    </div>
          </div>
        );
    }
}

export default Lab1;