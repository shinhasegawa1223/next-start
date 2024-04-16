// localhost:portNo/task
import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  // apiサーバーからデータを取得する
  // api（バックエンド）を別で立ててる場合こちらかの呼び出しでも対応可能
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET", // http method default "GET"
    cache: "no-store",
  });
  return await response.json(); // json response body ()注意
};
//　page componentはexport defaultを使用すること
// NG:export const TaskPage = () => {　 // async記載

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
