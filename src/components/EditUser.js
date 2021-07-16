import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    
    isChange = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        });
    }
    saveButton = () =>{
      var info = {};
      info.id = this.state.id
      info.name = this.state.name
      info.tel = this.state.tel
      info.permission = this.state.permission
      this.props.getUserEditInfo(info)
      this.props.changeEditUserStatus(); //ẩn form
    }
    render() {
        return (
            <div className="col">
          <form>
        <div className="card text-white bg-secondary border-primary mt-2">
        <div className="card-header text-center">Sửa thông tin người dùng</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name"  type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
          </div>
          <div className="form-group">
            <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} name="tel" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor />
              <select onChange={(event)=>this.iCchange(event)} defaultValue={this.props.userEditObject.permission} name="permission" required className="custom-select">
                <option selected>Chọn quyền mặc định</option>
                <option value="1">User</option>
                <option value="2">Admin</option>
                <option value="3">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input type="button" className="btn btn-block btn-danger" value ="Lưu thông tin" onClick={()=>this.saveButton()}/>
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
        );
    }
}

export default EditUser;