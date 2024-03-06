import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(user);
  return (
    <nav className="bg-white flex justify-between py-5 px-10 mb-4">
      <Link to= {isAuthenticated? "/tasks":"/"}>
        <h1 className="text-2xl font-bold">Tasks</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated? (
        <>
          <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg">Bienvenido!! {user.username}</li>
          <li>
            <Link to="/add-task" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Agregar Tarea</Link>
          </li>
          <li>
            <Link to="/" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
             onClick={()=>{
              logout();
            }}>Logout</Link>
          </li>
        </>
        ):(
        <>
          <li>
            <Link to="/login" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500  text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Login</Link>
          </li>
          <li>
            <Link to="/Register" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Register</Link>
          </li>
        </>
        )}
      </ul>
    </nav>
  );
}


export default Navbar;
