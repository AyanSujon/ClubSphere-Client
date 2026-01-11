


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router';
// import useAuth from '../../hooks/useAuth';
// import SocialLogin from './SocialLogin';
// import logo from '../../assets/logo/favicon.png';
// import Loading from '../Loading';
// import toast from 'react-hot-toast'; 

// const Login = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { signInWithEmailAndPasswordFunction, setLoading, loading } = useAuth();
//     const location = useLocation();
//     const navigate = useNavigate();

//     if (loading) {
//         return <Loading />;
//     }

//     const handleLogin = (data) => {
//         setLoading(true);
//         signInWithEmailAndPasswordFunction(data.email, data.password)
//             .then((result) => {
//                 toast.success('Login successful!'); // <-- success toast
//                 navigate(location?.state || '/');
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.message || 'Login failed.'); // <-- error toast
//                 setLoading(false);
//             });
//     }

//     return (
//         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-5">
//             <span className="flex justify-center items-center mt-5">
//                 <figure className="w-8 flex justify-center items-center">
//                     <img src={logo} alt="Logo" className="w-full h-auto" />
//                 </figure>
//             </span>
//             <h3 className="text-3xl text-center">Welcome back</h3>
//             <p className='text-center'>Login with ClubSphere</p>
//             <form onSubmit={handleSubmit(handleLogin)} className="card-body">
//                 <fieldset className="fieldset">
//                     {/* Email Field */}
//                     <label className="label">Email</label>
//                     <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
//                     {errors.email?.type === 'required' && (<p className='text-red-500'>Email is required.</p>)}

//                     {/* Password Field */}
//                     <label className="label">Password</label>
//                     <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })} className="input w-full" placeholder="Password" />
//                     {errors.password?.type === 'required' && (<p className='text-red-500'>Password is required.</p>)}
//                     {errors.password?.type === 'minLength' && (<p className='text-red-500'>Password must be 6 characters or longer.</p>)}
//                     {errors.password?.type === 'pattern' && (<p className='text-red-500'>Password must contain at least one uppercase, one lowercase, one number, and one special character.</p>)}

//                     <div><Link to={'/forget-password'} className="link link-hover">Forget Password?</Link></div>
//                     <button className="btn bg-primary hover:bg-secondary text-white mt-4">Login</button>
//                 </fieldset>
//                 <p>Don’t have any account? <Link to={'/register'} state={location?.state} className='text-primary link-hover'>Register</Link></p>
//             </form>
//             <SocialLogin />
//         </div>
//     );
// };

// export default Login;





import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import logo from '../../assets/logo/favicon.png';
import Loading from '../Loading';
import toast from 'react-hot-toast';

const Login = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { signInWithEmailAndPasswordFunction, setLoading, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleLogin = (data) => {
    setLoading(true);
    signInWithEmailAndPasswordFunction(data.email, data.password)
      .then(() => {
        toast.success('Login successful!');
        navigate(location?.state || '/');
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message || 'Login failed.');
        setLoading(false);
      });
  };

  // Demo Login Handler
  const fillDemo = (email, password) => {
    setValue("email", email);
    setValue("password", password);
    toast.success("Demo credentials filled!");
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-5">
      <span className="flex justify-center items-center mt-5">
        <figure className="w-8 flex justify-center items-center">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </figure>
      </span>

      <h3 className="text-3xl text-center">Welcome back</h3>
      <p className='text-center'>Login with ClubSphere</p>

      {/* Demo Credentials Section */}
      <div className="px-6 mt-3 space-y-2">
        <p className="text-sm text-center font-semibold">Demo Login</p>

        <button
          className="btn btn-sm w-full bg-primary/10 text-primary"
          onClick={() => fillDemo("admin1@gmail.com", "@Admin1")}
        >
          Login as Admin
        </button>

        <button
          className="btn btn-sm w-full bg-secondary/10 text-secondary"
          onClick={() => fillDemo("manager1@gmail.com", "@Manager1")}
        >
          Login as Club Manager
        </button>

        <button
          className="btn btn-sm w-full bg-base-200"
          onClick={() => fillDemo("clubmember1@gmail.com", "@clubMember1")}
        >
          Login as Club Member
        </button>
      </div>

      <form onSubmit={handleSubmit(handleLogin)} className="card-body">

        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Email is required.</p>}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
          {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer.</p>}
          {errors.password?.type === 'pattern' && (
            <p className='text-red-500'>
              Password must contain uppercase, lowercase, number & special character.
            </p>
          )}

          <div>
            <Link to={'/forget-password'} className="link link-hover">Forget Password?</Link>
          </div>

          <button className="btn bg-primary hover:bg-secondary text-white mt-4">Login</button>
        </fieldset>

        <p className="text-center">
          Don’t have an account?{" "}
          <Link to={'/register'} state={location?.state} className='text-primary link-hover'>
            Register
          </Link>
        </p>
      </form>

      <SocialLogin />
    </div>
  );
};

export default Login;
