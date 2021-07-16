import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class TableData extends Component {
  deleteButtonClick = (idUser) =>{
    this.props.deleteUser(idUser)
  }
  mappingDataUser = () =>
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow
      deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
      changeEditUserStatus={()=>this.props.changeEditUserStatus()} editFunClick={()=>this.props.editFun(value)} 
      id ={value.id} 
      userName={value.name} 
      tel = {value.tel} 
      permission = {value.permission}  
      key={key}></TableDataRow>
    )
    )

    render() {
      
        return (
            <div className="col">
            <table className="table table-striped table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
               {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;