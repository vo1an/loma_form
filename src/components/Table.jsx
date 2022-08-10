import React from "react";
  
const Table = ({ tableData, setTableData, handleSubmit, handleChange }) => {
    
    const erase = (index) => {
        console.log("before", tableData)
        tableData.splice(index, 1)
        console.log("after ", tableData)
    }
  return (
    <table className="table">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Full Name</th>
                    <th>Email Address</th>
                  <th>Password</th>
                                      <th>Actions</th>

                </tr>
            </thead>
            <tbody>
            {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.fullName}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.password}</td>
                            <td ><button className="btn btn-secondary pl-2" onClick={(e) => erase(index)}>Delete</button><span className="p-2"></span>
                                <button className="btn btn-warning">Edit</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
  );
};
  
export default Table ;