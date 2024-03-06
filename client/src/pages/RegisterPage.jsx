import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="w-full max-w-xs">
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold">Register</h1>
        <input
          type="text"
          {...register("username", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

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
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">Register</button>
      </form>

      <p className="flex gap-x-2 justify-between">
        Ya tienes una cuenta?,{" "}
        <Link to="/login" className="text-sky-500">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
}

export default RegisterPage;
