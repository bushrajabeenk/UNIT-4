import React, { useState, useRef } from "react";

const Form = () => {
  //   const [form, setForm] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     age: "",
  //     isIndian: false,
  //   });
  // these can be avoided unless we have
  // some initial value to be defined for
  // any particular input

  const [form, setForm] = useState({});
  const userRef = useRef();
  const passRef = useRef();

  const handleChange = (e) => {
    //   console.log(e);
    let { type, name, value, checked, files } = e.target;
    // console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

//   if (!form.username) {
//     userRef.current.focus();
//   } else if (!form.password) {
//     passRef.current.focus();
//   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            ref={userRef}
            // value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter name..."
            name="username"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            // value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email..."
            name="email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            ref={passRef}
            // value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password..."
            name="password"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            // value={form.age}
            onChange={handleChange}
            type="number"
            placeholder="Enter age..."
            name="age"
          />
        </div>
        <div>
          <label>City: </label>
          <select value={form.city} onChange={handleChange} name="city">
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div>
          <input
            // checked={form.isIndian}
            onChange={handleChange}
            type="checkbox"
            name="isIndian"
          />
          <label>is Indian</label>
        </div>
        <div>
          <label>Male</label>
          <input
            value="Male"
            onChange={handleChange}
            type="radio"
            name="gender"
          />
        </div>
        <div>
          <label>Female</label>
          <input
            value="Female"
            onChange={handleChange}
            type="radio"
            name="gender"
          />
        </div>
        <div>
          <label>Resume: </label>
          <input
            // files={form.resume}
            onChange={handleChange}
            type="file"
            accept="image/png, image/jpeg, application/pdf"
            name="resume"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>City</th>
            <th>Nationality</th>
            <th>Gender</th>
            <th>Resume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.username}</td>
            <td>{form.email}</td>
            <td>{form.password}</td>
            <td>{form.age}</td>
            <td>{form.city}</td>
            <td>{form.isIndian}</td>
            <td>{form.gender}</td>
            <td>{form.files}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
