import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(()=>{
   if(isAuthenticated) navigate('/tasks')
  }, [isAuthenticated]);
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="w-full max-w-xs">
      {signinErrors.map((error, i)=>(
          <div className="bg-red-500 p-2 text-white text-center my-2 rounded-md" key={i}>
            {error}
          </div>
          ))}
      
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <input
          type="email"
          {...register("email", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">email is required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">password is required</p>
        )}
        <button className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2" type="submit">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between">
        Si todavía no te has registrado?, <Link to="/register" className="text-sky-500">Sign up</Link> 
      </p>
      </div>
    </div>
  );
}

export default LoginPage;
