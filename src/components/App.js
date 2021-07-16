import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUsers from './AddUsers';

import React, { Component } from 'react';
import DataUsers from './data.json';
import { v1 as uuidv1 } from 'uuid'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      hienThiForm:true, 
      data: [],
      searchText:'', 
      editUserStatus:false,
      userEditObject:{}
    }
  }
  
  componentWillMount() {
    // kiểm tra xem có localStorage chưa
    if(localStorage.getItem('userData') !== null){
      var temp = JSON.parse(localStorage.getItem('userData')); 
      this.setState({
        data:temp
      });
    }
    else{
      localStorage.setItem('userData',JSON.stringify(DataUsers))
      
    }
  }
  
  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  // thongBao = () =>{
  //   alert("thành công")
  // }
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  getTextSearch = (dl) =>{
  //  console.log('dữ liệu nhận được là: ' +dl);
   this.setState({
     searchText:dl
   });
  

  }
  getNewUserData = (name, tel, permission) =>{
    var item ={}
    item.id =uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    console.log(item);
    var items = this.state.data;
    items.push(item);
    console.log(items);
    this.setState({
      data:items
    });
 // đẩy vào dữ liệU
 localStorage.setItem('userData',JSON.stringify(items))
 }
 // hàm kết nối từ app sang tableDataRow
 editUser = (user) =>{
    console.log("xin chào tôi là Đỗ Ngọc Vĩ");
    console.log(user);
    this.setState({
      userEditObject:user
    });
 }
 getUserEditInfoApp = (info) =>{
   console.log("thông tin đã sửa xong là " + info.name);
   this.state.data.forEach((value, key)=>{
     if(value.id === info.id){
       value.name = info.name
       value.tel = info.tel
       value.permission = info.permission
     }
   })
    // đẩy vào dữ liệU
  localStorage.setItem('userData',JSON.stringify(this.state.data))
 }
 deleteUser = (idUser)=>{
   var tempData = this.state.data.filter(item => item.id !== idUser);
   this.setState({
     data:tempData
   });
   // đẩy vào dữ liệU
  localStorage.setItem('userData',JSON.stringify(tempData))
 }
  render() {
    // localStorage.setItem("userData",JSON.stringify(DataUsers))
    var ketqua =[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!== -1){
        ketqua.push(item);
      
      }
    })
    return (
      <div>
        <div className="searchForm">
          <div className="container">
            <div className="row">
            <Header></Header>
        <Search getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject} changeEditUserStatus={()=>this.changeEditUserStatus()} editUserStatus = {this.state.editUserStatus} ketNoi = {() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm} check={(dl) => this.getTextSearch(dl)}></Search>
        <TableData deleteUser={(idUser)=>this.deleteUser(idUser)} changeEditUserStatus={()=>this.changeEditUserStatus()} editFun={(user)=>this.editUser(user)} dataUserProps={ketqua}></TableData>
        <AddUsers add = {(name,tel,permision)=>this.getNewUserData(name,tel,permision)} hienThiForm={this.state.hienThiForm}></AddUsers>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

export default App;