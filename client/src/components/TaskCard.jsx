import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  // console.log(task);
  const { deleteTask } = useTasks();
  return (
    <div className="bg-white shadow rounded-lg max-w-md w-full p-10">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button onClick={() => {deleteTask(task._id)}}>
            delete
          </button>
          <button>
            <Link to={`/tasks/${task._id}`}>edit</Link>
          </button>
        </div>
      </header>
      <p className="text-slate-500">{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
