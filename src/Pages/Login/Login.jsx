import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  console.log(from)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

     // validation
     setError('');
     setSuccess('');
     if (!/(?=.*[A-Z])/.test(password)) {
         setError('Please add at least one uppercase.');
         return
     }
   
     else if (password.length < 6) {
         setError('Password must be 6 characters long');
         return
     }

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.emailVerified) {
          setSuccess('User login successful.');
        setError('');
        }
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-orange-50">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="my-text-1 text-4xl text-center font-bold mb-3">
                Please Login
              </h1>
              <img
                src="https://i.ibb.co/Y72j6R6/cute-bear-playing-laptop-cartoon-346903-930.jpg"
                alt=""
                className=" w-2/3 mx-auto rounded-full"
              />
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text my-text-2 font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered my-bg-2"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text my-text-2 font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered my-bg-2"
                    name="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn my-btn-1">Login</button>
                </div>
              </form>
              <p>
                New to <span className="my-text-1">Kidland ? </span>{" "}
                <Link to="/register">
                  <span className="my-text-2 font-bold">Register</span>
                </Link>{" "}
              </p>
              <p className="text-center">or</p>
              <SocialLogin />
              <p className=' text-red-600 '>{error}</p>
            <p className='my-text-1 '>{success}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
