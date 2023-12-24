
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext)
  const navigate = useNavigate();
    const handleLogin =e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then(result=>{
         const user = result.user;
         console.log(user);
         e.target.reset();
         navigate('/');
        })
        .catch(error=>{
          console.log(error.message);
        })
        
    }
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt underline text-red-400 link link-hover">Forgot password?</a>
            <p className="text-xs ml-2">New to this website? <Link className="text-green-500 underline" to='/register'>Register Here</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;