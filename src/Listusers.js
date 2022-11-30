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
            <th className="col-auto">Action</th>
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
                  <Link to={values._id}>
                    <button className="btn btn-success"> View</button>{" "}
                  </Link>
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
