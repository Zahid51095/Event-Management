import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const [registerError, setRegisterError] = useState('');

    const { createUser } = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setRegisterError('');

        if(password.length < 6){
          setRegisterError('Password should be at least 6 characters or longer');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('Your password should have at least one upper case characters.');
          return;
        }
        else if((!/[^a-zA-Z0-9]/.test(password))){
          setRegisterError('Your password should have at least one special characters.');
          return;
        }


       


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                  'Good job!',
                  'You have registered successfully. Please login to enjoy!',
                  'success'
                )
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div>
             <Navbar></Navbar>
      <div>
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  name="photo"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
        </form>
        <p className="text-center mt-4">Already have an account ? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
        {
          registerError && <p className="text-red-600">{registerError}</p>
        }
      </div>
        </div>
    );
};

export default Register;