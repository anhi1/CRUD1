import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const {createTask} = useTasks();
  const navigate = useNavigate();
  

  const onSubmit = handleSubmit((data)=>{
    createTask(data);
    navigate('/tasks')
  })
  return (
    <div className="bg-indigo-600 max-w-md w-full p-10 rounded-md border border-gray-400d">
      <form onSubmit={onSubmit} className="space-y-6">
        <input type="text"
        placeholder="Title"
        {...register("title")}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        autoFocus
        />
        <textarea rows="3" placeholder="Description"
        {...register("description")}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
