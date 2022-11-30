import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function User() {
  let params = useParams();
  const formik = useFormik({});
  const [newUser, setnewUser] = useState("");
  let fetchUser = async () => {
    let user = await axios.get(`http://localhost:3001/users/${params.id}`);
    // formik.setValues({
    //   FirstName: user.data.FirstName,
    // });
    setnewUser(user.data);
    // console.log(user.data);
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
        <button className="btn btn-primary ms-3"> Back to Registration</button>
      </Link>
      <Link to={"/users"}>
        <button className="btn btn-warning ms-2"> Back to Users</button>
      </Link>
    </div>
  );
}

export default User;
