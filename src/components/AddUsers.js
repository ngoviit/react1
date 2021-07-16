import React, { Component } from 'react';

class AddUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      permission:""
    }
  }
  
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]:value
    });
    //pakage to item
    var item={};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
    // console.log(item);
  }
  kiemTraTrangThai = () =>{
    if(this.props.hienThiForm === true){
      return(
        <div className="col">
          <form>
        <div className="card border-primary mt-2">
        <div className="card-header">Thêm mới User vào hệ thống</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input name="name" onChange={(event)=>this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
          </div>
          <div className="form-group">
            <input name="tel" onChange={(event)=>this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor />
              <select name="permission" onChange={(event)=>this.isChange(event)} required className="custom-select">
                <option selected>Chọn quyền mặc định</option>
                <option value="1">User</option>
                <option value="2">Admin</option>
                <option value="3">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input type="reset" className="btn btn-block btn-primary" onClick={()=>this.props.add(this.state.name, this.state.tel, this.state.permission)} value ="thêm mới"/>
            </div>
          </div>
        </div>
      </div>
      </form>
      </div>
      )
    } 
  }
  
      render() {
        return (
          <div>

            {
              this.kiemTraTrangThai()
            }
            </div>
           
        );
    }
}

export default AddUsers;