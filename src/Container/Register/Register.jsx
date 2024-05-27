import React, { useState } from "react";

import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { loadAccount, registerDoctor, registerUser } from "../../Store/Interactions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const provider = useSelector((state) => state.Provider.connection);
  const medicalStorage = useSelector((state) => state.MedicalStorage.contract);
  const dispatch = useDispatch();
  const [registerType, setRegisterType] = useState("patient");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [problem, setProblem] = useState("");
  
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [major, setMajor] = useState("");
  const [details, setDetails] = useState("");

  const registerHandler = (e) => {
    setRegisterType(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    loadAccount(provider, dispatch);
    if (registerType === "patient") {
      await registerUser(
        name,
        age,
        problem,
        registerType,
        provider,
        medicalStorage,
        dispatch
      );
      navigate("/Patient", {
        state: {},
      });
    } else {
      await registerDoctor(
        name,
        phone,
        gender,
        qualification,
        major,
        details,
        provider, // Pass provider as the first argument
        medicalStorage,
        dispatch
      );
    
      navigate("/Doctor", {
        state: {},
      });
    }
    setName("");
    setAge("");
    setDetails("");
    setProblem("");
    setPhone("");
    setGender("");
    setQualification("");
    setMajor("");
  };

  return (
    <div className="container">
      <h2>Register with web3 Swastchain</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Register as :</label>
          <select
            name="registerAs"
            onChange={registerHandler}
            value={registerType}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        {registerType === "patient" ? (
          <div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                placeholder="Your Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                required
              />
            </div>
            <div className="form-group">
              <label>Problem:</label>
              <input
                type="text"
                placeholder="Your Problem"
                onChange={(e) => setProblem(e.target.value)}
                value={problem}
                required
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                placeholder="Your Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender:</label>
              <input
                type="text"
                placeholder="Your Gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              />
            </div>
            <div className="form-group">
              <label>Qualification:</label>
              <input
                type="text"
                placeholder="Your Qualification"
                onChange={(e) => setQualification(e.target.value)}
                value={qualification}
                required
              />
            </div>
            <div className="form-group">
              <label>Major:</label>
              <input
                type="text"
                placeholder="Your Major"
                onChange={(e) => setMajor(e.target.value)}
                value={major}
                required
              />
            </div>
            <div className="form-group">
              <label>Details:</label>
              <input
                type="text"
                placeholder="Details about yourself"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
                required
              />
            </div>
          </div>
        )}
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
