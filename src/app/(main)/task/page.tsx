// localhost:portNo/task
import { Task } from "@/app/api/tasks/route";
import { log } from "console";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET", // http method default "GET"
    cache: "no-store",
  });
  return await response.json(); // json response body ()注意
};
//　page componentはexport defaultを使用すること
// NG:export const TaskPage = () => {

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
