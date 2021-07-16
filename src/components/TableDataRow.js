import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () =>{
        if(this.props.permission === 1){
            return "User"
        }
        else if(this.props.permission === 2){
            return "Admin"
        }
        else{
            return "Other"
        }
    }
    editClick = () =>{
        this.props.editFunClick();
        this.props.changeEditUserStatus()
    }
    deleteButtonClick = (idUser)=>{
        this.props.deleteButtonClick(idUser)
    }
    render() {
        return (
            <tr>
                  <td >{this.props.id}</td>
                  <td>{this.props.userName}</td>
                  <td>{this.props.tel} </td>
                  <td>{this.permissionShow()}</td>
                  <td>
                    <div className="btn-group">
                      <div onClick={()=>this.editClick()} className="btn btn-warning sua"><i className="fa fa-edit " />Sửa</div>
                      <div onClick={(idUser)=>this.deleteButtonClick(this.props.id)} className="btn btn-danger sua"><i className="fa fa-delete" />Xoá</div>
                    </div>
                  </td>
                </tr>
        );
    }
}

export default TableDataRow;