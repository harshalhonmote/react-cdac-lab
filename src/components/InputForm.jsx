import React, { useState } from "react";

function InputForm() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit=()=>{
        console.log(email,pass);
    }

  return (
    <>
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
        <button type="submit" className="btn btn-primary" value={email}>
      
        </button>
        <button type="submit" className="btn btn-primary" value={email}>
          {email}
        </button>
      </form>
    </div>
    </>
  );
}

export default InputForm;
