import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue} = useForm(); // metodos:  set value, ...
  const {createTask, getTask, updateTask} = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  
  useEffect(()=>{
   async function  loadTask() {
      if(params.id){
        const task = await getTask(params.id);
        console.log(task);
        setValue('title', task.title)
        setValue('description', task.description)
        setValue("date", dayjs(task.date).utc().format('YYYY-MM-DD'));
      }
    }
    loadTask()
  },[])

  const onSubmit = handleSubmit((data)=>{
    const dataValid = {
      ...data,
      date: data.date? dayjs.utc(data.date).format(): dayjs.utc().format(),
    };

    if(params.id){
      updateTask(params.id, {
      ...data,
      date: dayjs.utc(data.date).format()
    }); 
    }else{
      createTask({
      ...data,
      date: dayjs.utc(data.date).format()
    });
  }
    navigate('/tasks');
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    
    <div className="bg-indigo-600 max-w-md w-full p-10 rounded-md border border-gray-400d">
      <form onSubmit={onSubmit} className="space-y-6">
        <label htmlFor="title">Title</label>
        <input type="text"
        placeholder="Title"
        {...register("title")}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        autoFocus
        />

        <label htmlFor="description">Descripción</label>
        <textarea rows="3" placeholder="Description"
        {...register("description")}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        ></textarea>

        <label htmlFor="date">Date</label>
        <input type="date" {...register('date')}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        />

        <button className="bg-indigo-500 px-3 py-2 rounded-md">Save</button>
      </form>
    </div>
    </div>
  );
}

export default TaskFormPage;
