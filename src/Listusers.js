import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Listusers() {
  const [userList, setuserList] = useState([]);
  let fetchUsers = async () => {
    let users = await axios.get("http://localhost:3001/users");
    setuserList(users.data);
    console.log(userList);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleDelete = async (id) => {
    try {
      let ask = window.confirm("Do You want to delete this record?");
      if (ask) {
        await axios.delete(`http://localhost:3001/users/${id}`);
        fetchUsers();
        alert("Deleted Successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Error in Deleting");
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">List of users</h1>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th className="col-auto">First Name</th>
            <th className="col-auto">Last Name</th>
            <th className="col-auto">Provider Type</th>
            <th className="col-auto">Registration Number</th>
            <th className="col-auto mx-auto">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((values) => {
            return (
              <tr>
                <td>{values.FirstName}</td>
                <td>{values.LastName}</td>
                <td>{values.ProviderType}</td>
                <td>{values.RegistrationNumber}</td>
                <td>
                  <Link to={`view/${values._id}`}>
                    <button className="btn btn-success"> View </button>
                  </Link>
                  <Link to={`edit/${values._id}`}>
                    <button className="btn btn-warning ms-2"> Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => {
                      handleDelete(values._id);
                    }}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"/"}>
        {" "}
        <button className="btn btn-primary mx-auto">
          {" "}
          Back to Registration
        </button>
      </Link>
    </div>
  );
}

export default Listusers;
