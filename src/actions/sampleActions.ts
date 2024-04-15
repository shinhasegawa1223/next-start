"use server";

// fromData:FormData
// 記載することで入力したフォームの値を取ることができる
export const createTask = async (taskId: number, formData: FormData) => {
  // 例：DB二タスクを作成する
  console.log("created task");
  console.log(formData);
  console.log(formData.get("name"));
  console.log(taskId);
};
