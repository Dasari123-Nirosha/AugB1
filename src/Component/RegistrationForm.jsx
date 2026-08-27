import React, { useState } from "react";

export default function RegistrationForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });

    setSuccess("");
  };

  const validate = () => {

    let newErrors = {};

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = "Minimum 3 characters";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter valid email";
    }

    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit number";
    }

    if (formData.dob === "") {
      newErrors.dob = "Date of birth is required";
    } else {

      const today = new Date();
      const birth = new Date(formData.dob);

      let age =
        today.getFullYear() -
        birth.getFullYear();

      const month =
        today.getMonth() -
        birth.getMonth();

      if (
        month < 0 ||
        (month === 0 &&
          today.getDate() < birth.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        newErrors.dob =
          "Must be at least 18 years";
      }
    }

    if (formData.gender === "") {
      newErrors.gender = "Select gender";
    }

    if (formData.password === "") {
      newErrors.password =
        "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword =
        "Confirm password";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (formData.address.trim() === "") {
      newErrors.address =
        "Address is required";
    }

    if (formData.city.trim() === "") {
      newErrors.city =
        "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
      setSuccess(
        "✓ Profile created successfully!"
      );
    }
  };

  const handleReset = () => {

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      password: "",
      confirmPassword: "",
      address: "",
      city: ""
    });

    setErrors({});
    setSuccess("");
  };

  return (
    <div className="registration-card">

      <div className="form-heading">

        <p>REGISTRATION / 2026</p>

        <h2>Create your profile</h2>

        <span>
          Fill in your details to get started
        </span>

      </div>


      <form onSubmit={handleSubmit}>

        {/* PERSONAL DETAILS */}

        <div className="section personal">

          <div className="section-title">

            <span className="number">
              01
            </span>

            <span>
              Personal Details
            </span>

          </div>


          <div className="input-grid">

            <div className="field">
              <label>First Name *</label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
              />

              {errors.firstName && (
                <small className="error">
                  {errors.firstName}
                </small>
              )}
            </div>


            <div className="field">
              <label>Last Name *</label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
              />

              {errors.lastName && (
                <small className="error">
                  {errors.lastName}
                </small>
              )}
            </div>


            <div className="field">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small className="error">
                  {errors.email}
                </small>
              )}
            </div>


            <div className="field">
              <label>Mobile Number *</label>

              <input
                type="text"
                name="mobile"
                placeholder="10 digit number"
                value={formData.mobile}
                onChange={handleChange}
              />

              {errors.mobile && (
                <small className="error">
                  {errors.mobile}
                </small>
              )}
            </div>


            <div className="field">
              <label>Date of Birth *</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />

              {errors.dob && (
                <small className="error">
                  {errors.dob}
                </small>
              )}
            </div>


            <div className="field">
              <label>Gender *</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

              {errors.gender && (
                <small className="error">
                  {errors.gender}
                </small>
              )}

            </div>

          </div>

        </div>


        {/* ACCOUNT SECURITY */}

        <div className="section security">

          <div className="section-title">

            <span className="number">
              02
            </span>

            <span>
              Account Security
            </span>

          </div>


          <div className="input-grid">

            <div className="field">

              <label>Password *</label>

              <input
                type="password"
                name="password"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <small className="error">
                  {errors.password}
                </small>
              )}

            </div>


            <div className="field">

              <label>
                Confirm Password *
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <small className="error">
                  {errors.confirmPassword}
                </small>
              )}

            </div>

          </div>


          <div className="password-info">
            🔒 Password must contain at least 8 characters
          </div>

        </div>


        {/* CONTACT DETAILS */}

        <div className="section contact">

          <div className="section-title">

            <span className="number">
              03
            </span>

            <span>
              Contact Details
            </span>

          </div>


          <div className="field full">

            <label>Address *</label>

            <textarea
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
            />

            {errors.address && (
              <small className="error">
                {errors.address}
              </small>
            )}

          </div>


          <div className="field city-field">

            <label>City *</label>

            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
            />

            {errors.city && (
              <small className="error">
                {errors.city}
              </small>
            )}

          </div>

        </div>


        {/* SUCCESS */}

        {success && (
          <div className="success">
            {success}
          </div>
        )}


        {/* BUTTONS */}

        <div className="buttons">

          <button
            type="button"
            className="reset"
            onClick={handleReset}
          >
            Reset
          </button>

          <button
            type="submit"
            className="submit"
          >
            Create Profile →
          </button>

        </div>

      </form>

    </div>
  );
}
