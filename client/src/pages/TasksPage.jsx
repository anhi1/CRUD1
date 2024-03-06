import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

import TaskCard from "../components/TaskCard"

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if(tasks.length === 0 )return (<h1>No tasks</h1>);

  return (
   <div className="flex justify-center items-center">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>
      ))}
    </div>
    </div>
    
  );
}

export default TasksPage;
