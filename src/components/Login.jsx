import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const navigate = useNavigate();

  const { singInUser, singInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSingIn = () => {
    singInWithGoogle()
    .then(result => {
        console.log(result.user);
        navigate("/");
    })
    .catch(error => console.log('error', error.message))
  }

  return (
    <div>
      <h2 className="text-center mt-20 text-3xl font-bold">Login now</h2>
      <div className="mt-5 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-5">
          New to this website? Please <Link to="/register">Register</Link>{" "}
        </p>
        <p>
          <button onClick={handleGoogleSingIn} className="btn mb-5 ml-5">Google</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
