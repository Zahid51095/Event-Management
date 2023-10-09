import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const [loginError, setLoginError] = useState('');

    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
      googleSignIn().then(result => {
        console.log(result.user);
      });
    }

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setLoginError('');

        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            Swal.fire(
              'Good job!',
              'You have registered successfully!',
              'success'
            )

            navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            console.log(error);
            setLoginError(error.message);
        })
    }


  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
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
        <p className="text-center mt-4">Do not have an account ? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        {
          loginError && <p className="text-red-600">{loginError}</p>
        }
      </div>
      <div className="text-center mt-4">
          <button onClick={handleGoogle} className="btn btn-primary">Google Login</button>
        </div>
    </div>
  );
};

export default Login;
