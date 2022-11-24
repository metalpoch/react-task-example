import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCards from "./TaskCards";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl text-center">No tasks yet!</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => {
        return <TaskCards key={i} task={task} />;
      })}
    </div>
  );
};

export default TaskList;
