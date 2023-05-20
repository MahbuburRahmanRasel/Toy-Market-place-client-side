import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

  const {registerUser}= useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/';


const handleSignup = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photourl.value
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);

    registerUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.log(error);
    })


}



    return (
        <div>
             <div>
      <div className="hero min-h-screen bg-teal-100">
        <div className="hero-content flex-col lg:flex-row">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="my-text-1 text-4xl text-center font-bold mb-3">Please Register</h1>
                <img src="https://i.ibb.co/1dGHcY8/istockphoto-1396745198-612x612.jpg" alt=""  className=" w-2/3 mx-auto rounded-full"/>
               
                <form onSubmit={handleSignup}>
                <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered my-bg-2"
                  name= "name"
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  className="input input-bordered my-bg-2"
                  name = 'photourl'
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered my-bg-2"
                  name= 'email'
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text my-text-2 font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered my-bg-2"
                  name='password'

                />
                
              </div>
              <div className="form-control mt-6">
               <button className="btn my-btn-1">Register</button>
              </div>
              </form>
              <p>Already Register to <span className="my-text-1">Kidland ? </span> <Link to='/login'><span className="my-text-2 font-bold">Login</span></Link> </p>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;