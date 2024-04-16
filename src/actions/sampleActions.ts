// server側で動作を保証する
// 'use server'
// 'use client'
"use server";

//redirect時に必要
import { redirect } from "next/navigation";

interface FormState {
  error: string;
}
// 記載することで入力したフォームの値を取ることができる
// fromData:FormData
export const createTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
) => {
  // 例：DB二タスクを作成する
  // db get method
  console.log("created task");
  console.log(formData);

  // name属性の値を取得する
  console.log(`name:${formData.get("name")}`);

  // bindしたtaskIdの値を表示
  console.log(`taskId:${taskId}`);
  //redirect("/task"); // `` , "" , '' で指定をしてredirectを行う

  //state.error = "error";
  return state;
};
