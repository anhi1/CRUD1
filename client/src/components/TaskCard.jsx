import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import days from 'dayjs';
import utc from 'dayjs/plugin/utc'
days.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-white shadow rounded-lg max-w-md w-full p-10">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
      </header>
      <p className="text-slate-500">{task.description}</p>
      <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
      <div className="flex gap-x-2 items-center">
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => {deleteTask(task._id)}}>
            delete
          </button>
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Link to={`/tasks/${task._id}`}>edit</Link>
          </button>
        </div>
    </div>
  );
}

export default TaskCard;
