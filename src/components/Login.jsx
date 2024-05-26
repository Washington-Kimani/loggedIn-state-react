import React, { useState } from "react";

const LoginPage = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    await localStorage.setItem("user", JSON.stringify(formData));

    window.location.reload();
    // Add logic for login authentication here
  };

  return (
    <div className="bg-teal-700 px-10 py-8 shadow-slate-400 rounded-md">
      <form
        className="p-4 flex flex-col gap-4 rounded-md text-white"
        onSubmit={handleSubmit}
      >
        <h2 className="w-full text-center p-1 shadow-lg rounded-sm text-black">
          Please Login
        </h2>
        <label className="flex flex-col">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="text-black outline-none border-none px-2 py-1 text-sm rounded-sm"
            required
          />
        </label>
        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black outline-none border-none px-2 py-1 text-sm rounded-sm"
            required
          />
        </label>
        <br />
        <br />
        <button
          type="submit"
          className="w-full text-center p-1 bg-fuchsia-950 shadow-lg rounded-sm cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
