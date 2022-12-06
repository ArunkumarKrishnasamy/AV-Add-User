import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

function User() {
  let params = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [userID, setUserID] = useState();
  const Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      UserName: "",
      FirstName: "",
      LastName: "",
      pan: "",
      RegistrationNumber: "",
      npi: "",
      ProviderType: "",
      MainMenuRole: "",
      taxonamy: "",
      StateLicense: "",
      WenoId: "",
      AccessControl: "",
      BillingFacility: "",
      password: "",
      RePassword: "",
      MiddleName: "",
      provider: "",
      calendar: "",
      portal: "",
      Facility: "",
      DEA: "",
      authorisation: "",
      JobDescription: "",
      PatientRole: "",
      Supervisor: "",
      CropRole: "",
      Email: "",
      AdditionalInfo: "",
    },
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.UserName) {
    //     errors.UserName = "Please Enter User Name";
    //   }
    //   if (!values.FirstName) {
    //     errors.FirstName = "Please Enter First Name";
    //   }

    //   if (!values.password) {
    //     errors.password = "Please Enter Password";
    //   }
    //   if (!values.RePassword) {
    //     errors.RePassword = "Please Re-Enter Password";
    //   } else if (values.password !== values.RePassword) {
    //     errors.RePassword = "Password doesn't match";
    //   }

    //   if (!values.Email) {
    //     errors.Email = "Please Enter Email Id";
    //   }

    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        if (isEdit) {
          await axios.put(`http://localhost:3001/users/${userID}`, values);
          alert("Data Edited Successfully");
          Navigate("/users");
        } else {
          await axios.post("http://localhost:3001/users", values);
          alert("Data posted");
          Navigate("/users");
        }
      } catch (error) {
        console.log(error);
        alert("data Posting went wrong");
      }
    },
  });
  const [newUser, setnewUser] = useState("");
  let fetchUser = async () => {
    let user = await axios.get(`http://localhost:3001/users/${params.id}`);
    formik.setValues({
      FirstName: user.data.FirstName,
      LastName: user.data.LastName,
      UserName: user.data.UserName,

      pan: user.data.pan,
      RegistrationNumber: user.data.RegistrationNumber,
      npi: user.data.npi,
      ProviderType: user.data.ProviderType,
      MainMenuRole: user.data.MainMenuRole,
      taxonamy: user.data.taxonamy,
      StateLicense: user.data.StateLicense,
      WenoId: user.data.WenoId,
      AccessControl: user.data.AccessControl,
      BillingFacility: user.data.BillingFacility,
      password: user.data.password,
      RePassword: user.data.RePassword,
      MiddleName: user.data.MiddleName,
      provider: user.data.provider,
      calendar: user.data.calendar,
      portal: user.data.portal,
      Facility: user.data.Facility,
      DEA: user.data.DEA,
      authorisation: user.data.authorisation,
      JobDescription: user.data.JobDescription,
      PatientRole: user.data.PatientRole,
      Supervisor: user.data.Supervisor,
      CropRole: user.data.CropRole,
      Email: user.data.Email,
      AdditionalInfo: user.data.AdditionalInfo,
    });
    setUserID(user.data._id);
    setIsEdit(true);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <h1 className="text-center">Edit User Information</h1>
      <div className="container">
        <form className="registration-form" onSubmit={formik.handleSubmit}>
          <div className="main-content-wrapper m-5">
            <span className="fw-bold">Add User</span>
            <button
              type="submit"
              id="btnsubmit"
              className="btn btn-primary ms-3"
            >
              {" "}
              Save
            </button>
            <Link to={"/users"}>
              <button className="btn btn-outline ms-3"> Cancel</button>
            </Link>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="left-block container m-2 ">
                <div className="row g-3 align-items-center mx-2 ">
                  <div className="col-4">
                    <label for="UserName" className="col-form-label">
                      User Name:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="UserName"
                      id="UserName"
                      className="form-control"
                      value={formik.values.UserName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.UserName && formik.errors.UserName ? (
                        <div> {formik.errors.UserName}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="FirstName" className="col-form-label">
                      First Name:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="FirstName"
                      id="FirstName"
                      className="form-control"
                      value={formik.values.FirstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.FirstName && formik.errors.FirstName ? (
                        <div> {formik.errors.FirstName}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="LastName" className="col-form-label">
                      Last Name:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="LastName"
                      id="LastName"
                      className="form-control"
                      value={formik.values.LastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.LastName && formik.errors.LastName ? (
                        <div> {formik.errors.LastName}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="pan" className="col-form-label">
                      PAN No. :
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="pan"
                      id="pan"
                      className="form-control"
                      value={formik.values.pan}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.pan && formik.errors.pan ? (
                        <div> {formik.errors.pan}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="RegistrationNumber" className="col-form-label">
                      Registration No.:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      id="RegistrationNumber"
                      name="RegistrationNumber"
                      className="form-control"
                      value={formik.values.RegistrationNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.RegistrationNumber &&
                      formik.errors.RegistrationNumber ? (
                        <div> {formik.errors.RegistrationNumber}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="npi" className="col-form-label">
                      NPI:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="npi"
                      id="npi"
                      className="form-control"
                      value={formik.values.npi}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.npi && formik.errors.npi ? (
                        <div> {formik.errors.npi}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="ProviderType" className="col-form-label">
                      Provider Type:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="ProviderType"
                      id="ProviderType"
                      value={formik.values.ProviderType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Provider Type</option>
                      <option value="Provider A">Provider A</option>
                      <option value="Provider B">Provider B</option>
                      <option value="Provider C">Provider C</option>
                      <option value="Provider D">Provider D</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.ProviderType &&
                      formik.errors.ProviderType ? (
                        <div> {formik.errors.ProviderType}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="MainMenuRole" className="col-form-label">
                      Main Menu Role:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="MainMenuRole"
                      id="MainMenuRole"
                      value={formik.values.MainMenuRole}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Role Type</option>
                      <option value="standard">Standard</option>
                      <option value="plus">Plus</option>
                      <option value="premium">Premium</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.MainMenuRole &&
                      formik.errors.MainMenuRole ? (
                        <div> {formik.errors.MainMenuRole}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="taxonamy" className="col-form-label">
                      Taxonamy:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="taxonamy"
                      id="taxonamy"
                      className="form-control"
                      value={formik.values.taxonamy}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />{" "}
                    <span style={{ color: "red" }}>
                      {formik.touched.taxonamy && formik.errors.taxonamy ? (
                        <div> {formik.errors.taxonamy}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="StateLicense" className="col-form-label">
                      State License Number:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="StateLicense"
                      id="StateLicense"
                      className="form-control"
                      value={formik.values.StateLicense}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.StateLicense &&
                      formik.errors.StateLicense ? (
                        <div> {formik.errors.StateLicense}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="WenoId" className="col-form-label">
                      Weno Provider ID:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="WenoId"
                      id="WenoId"
                      className="form-control"
                      value={formik.values.WenoId}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.WenoId && formik.errors.WenoId ? (
                        <div> {formik.errors.WenoId}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="AccessControl" className="col-form-label">
                      Access Control:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="AccessControl"
                      id="AccessControl"
                      value={formik.values.AccessControl}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Role Type</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Administrators">Administrators</option>
                      <option value="Clincians">Clincians</option>
                      <option value="Emergency Providers">
                        Emergency Providers
                      </option>
                      <option value="Physicians">Physicians</option>
                      <option value="Psycologists">Psycologists</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.AccessControl &&
                      formik.errors.AccessControl ? (
                        <div> {formik.errors.AccessControl}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="BillingFacility" className="col-form-label">
                      Default Billing Facility:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="BillingFacility"
                      id="BillingFacility"
                      value={formik.values.BillingFacility}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Billing Facility</option>
                      <option value="Great Clinic">Great Clinic</option>
                      <option value="Clinic A">Clinic A</option>
                      <option value="Clinic B">Clinic B</option>
                      <option value="Clinic C">Clinic C</option>
                      <option value="Clinic D">Clinic D</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.BillingFacility &&
                      formik.errors.BillingFacility ? (
                        <div> {formik.errors.BillingFacility}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="right container ">
                <div className="row g-3 align-items-center mx-2">
                  <div className="col-4">
                    <label for="password" className="col-form-label">
                      Password:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.password && formik.errors.password ? (
                        <div> {formik.errors.password}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="RePassword" className="col-form-label">
                      Re-Enter Password:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="password"
                      id="RePassword"
                      name="RePassword"
                      className="form-control"
                      value={formik.values.RePassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.RePassword && formik.errors.RePassword ? (
                        <div> {formik.errors.RePassword}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="MiddleName" className="col-form-label">
                      Middle Name:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      id="MiddleName"
                      name="MiddleName"
                      className="form-control"
                      value={formik.values.MiddleName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.MiddleName && formik.errors.MiddleName ? (
                        <div> {formik.errors.MiddleName}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="provider" className="mx-2">
                      {" "}
                      Provider :
                    </label>
                    <input
                      id="provider"
                      name="provider"
                      type={"checkbox"}
                      value={formik.values.provider}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-4">
                    <label for="calendar" className="mx-2">
                      {" "}
                      Calendar :
                    </label>
                    <input
                      id="calendar"
                      name="calendar"
                      type={"checkbox"}
                      value={formik.values.calendar}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <div className="col-4">
                    <label for="portal" className="mx-2">
                      {" "}
                      Portal :
                    </label>
                    <input
                      id="portal"
                      name="portal"
                      type={"checkbox"}
                      value={formik.values.portal}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="Facility" className="col-form-label">
                      Default Facility:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="Facility"
                      id="Facility"
                      value={formik.values.Facility}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Default Facility</option>
                      <option value="Great Clinic">Great Clinic</option>
                      <option value="Clinic A">Clinic A</option>
                      <option value="Clinic B">Clinic B</option>
                      <option value="Clinic C">Clinic C</option>
                      <option value="Clinic D">Clinic D</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.Facility && formik.errors.Facility ? (
                        <div> {formik.errors.Facility}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="DEA" className="col-form-label">
                      DEA Number:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="DEA"
                      id="DEA"
                      className="form-control"
                      value={formik.values.DEA}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.DEA && formik.errors.DEA ? (
                        <div> {formik.errors.DEA}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="authorisation" className="col-form-label">
                      See Authorisations:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="authorisation"
                      id="authorisation"
                      value={formik.values.authorisation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Authorisation</option>
                      <option value="None">None</option>
                      <option value="Yes">Yes</option>
                      <option value="Not Available">Not Available</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.authorisation &&
                      formik.errors.authorisation ? (
                        <div> {formik.errors.authorisation}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="JobDescription" className="col-form-label">
                      Job Description:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name="JobDescription"
                      id="JobDescription"
                      className="form-control"
                      value={formik.values.JobDescription}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.JobDescription &&
                      formik.errors.JobDescription ? (
                        <div> {formik.errors.JobDescription}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2 mt-5">
                  <div className="col-4">
                    <label for="PatientRole" className="col-form-label">
                      Patient Menu Role:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="PatientRole"
                      id="PatientRole"
                      value={formik.values.PatientRole}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Choose Patient Menu Role</option>
                      <option value="Standard"> Standard</option>
                      <option value="Patient A"> Patient A Role</option>
                      <option value="Patient B">Patient B Role</option>
                      <option value="Patient C">Patient C Role</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.PatientRole &&
                      formik.errors.PatientRole ? (
                        <div> {formik.errors.PatientRole}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="Supervisor" className="col-form-label">
                      Supervisor:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="Supervisor"
                      id="Supervisor"
                      value={formik.values.Supervisor}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select Supervisor</option>
                      <option value="Supervisor A"> Supervisor A </option>
                      <option value="Supervisor B">Supervisor B </option>
                      <option value="Supervisor C">Supervisor C </option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.Supervisor && formik.errors.Supervisor ? (
                        <div> {formik.errors.Supervisor}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="CropRole" className="col-form-label">
                      NewCrop eRX Role:
                    </label>
                  </div>
                  <div className="col-8">
                    <select
                      name="CropRole"
                      id="CropRole"
                      value={formik.values.CropRole}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">--Select NewCrop eRX Role</option>
                      <option value="NewCrop eRX Role A">
                        {" "}
                        NewCrop eRX Role A{" "}
                      </option>
                      <option value="NewCrop eRX Role B">
                        NewCrop eRX Role B{" "}
                      </option>
                      <option value="NewCrop eRX Role C">
                        NewCrop eRX Role C{" "}
                      </option>
                    </select>
                    <span style={{ color: "red" }}>
                      {formik.touched.CropRole && formik.errors.CropRole ? (
                        <div> {formik.errors.CropRole}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="Email" className="col-form-label">
                      Google Email for Login:
                    </label>
                  </div>
                  <div className="col-8">
                    <input
                      type={"email"}
                      name="Email"
                      id="Email"
                      className="form-control"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <span style={{ color: "red" }}>
                      {formik.touched.Email && formik.errors.Email ? (
                        <div> {formik.errors.Email}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="row g-3 align-items-center m-2">
                  <div className="col-4">
                    <label for="AdditionalInfo" className="col-form-label">
                      Additional Information:
                    </label>
                  </div>
                  <div className="col-8">
                    <textarea
                      id="AdditionalInfo"
                      name="AdditionalInfo"
                      rows="3"
                      cols={"40"}
                      value={formik.values.AdditionalInfo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>{" "}
                    <span style={{ color: "red" }}>
                      {formik.touched.AdditionalInfo &&
                      formik.errors.AdditionalInfo ? (
                        <div> {formik.errors.AdditionalInfo}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
