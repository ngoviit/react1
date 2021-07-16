import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      tempValue:'',
      userObj:{}
    }
  }
  getUserEditInfo = (info) =>{
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info)
  }
  isShowEditForm = () =>{
    if(this.props.editUserStatus === true){
      return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} userEditObject ={this.props.userEditObject} changeEditUserStatus={()=>this.props.changeEditUserStatus()}></EditUser>
    }
    else{
      return
    }
  }
 
  hienThiNut = () =>{
    if(this.props.hienThiForm === true){
      return(
        <div className="btn btn-block btn-outline-danger mt-2" onClick={()=>this.props.ketNoi()}>Huỷ bỏ</div>
      )
    }
    else{
      return(
        <div className="btn btn-block btn-outline-info mt-2" onClick={()=>this.props.ketNoi()} >Thêm mới</div>
      )

    }
  }
  isChange = (event) =>{
    console.log(event.target.value)
    this.setState({
      tempValue:event.target.value
    })
    this.props.check(this.state.tempValue)
  }
    render() {
      
        return (
            <div className="col-12">
              <div className="row">
                {
                  this.isShowEditForm()
                }
              </div>
            <div className="form-group">
              <div className="btn-group">
                <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên cần tìm" style={{width: '500px'}} />
                <div className="btn btn-info" onClick={()=>this.props.check(this.state.tempValue)}>Tìm</div>

              </div>
             
              
              {
                this.hienThiNut()
              }
              
            </div>
            <hr></hr>
          </div>

          
        );
    }
}

export default Search;