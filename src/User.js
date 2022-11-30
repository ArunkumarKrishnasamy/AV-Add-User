import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function User() {
  let params = useParams();

  const [newUser, setnewUser] = useState();
  let fetchUser = async () => {
    let user = await axios.get(`http://localhost:3001/users/${params.id}`);
    setnewUser(user);

    console.log(newUser);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1 className="text-center">User Information</h1>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th className="col-auto">First Name</th>
            <th className="col-auto">State License Number</th>
            <th className="col-auto">User Name</th>
            <th className="col-auto">DEA Number</th>

            <th className="col-auto">Provider Type</th>
            <th className="col-auto">Registration Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{newUser.FirstName}</td>
            <td>{newUser.StateLicense}</td>
            <td>{newUser.UserName}</td>
            <td>{newUser.DEA}</td>
            <td>{newUser.ProviderType}</td>
            <td>{newUser.RegistrationNumber}</td>
          </tr>
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

export default User;
