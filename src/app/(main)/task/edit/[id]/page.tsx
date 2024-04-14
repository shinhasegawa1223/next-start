// localhost:portNo/task/edit/id:number or param:string

const TaskEditIdPage = ({
  params,
}: {
  //id はディレクトリ合わせる必要あり
  // [tasks_id] としてディレクトリを作成した場合は
  // params:{task_id: number} のような定義方法になる
  // string| number などtypescriptの型定義で記述する
  params: { id: string };
  // {params.id}
}) => {
  return <div>{params.id}</div>;
};

export default TaskEditIdPage;
