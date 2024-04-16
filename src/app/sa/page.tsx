"use client";

import { createTask } from "@/actions/sampleActions";

// useFormStatus useFormState直下では使用できない
// ラップすることで使用可能
import { useFormState, useFormStatus } from "react-dom";

const ServerActionsPage = () => {
  const taskId: number = 1;

  // bind 指定でIDが遅れる null, taskIdでform内のデータとtaskIdが渡る
  const createForm = createTask.bind(null, taskId);

  // createTask IDなどの引数がいらない場合はそのまま渡せる

  const initialState = { error: "" };

  // 第二引数 stateの初期状態を入力する

  // 戻り値 state = サーバーアクションの戻り値
  // formAction　サーバーアクションと同じ動きをする
  const [state, formAction] = useFormState(createForm, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
      <button
        className="bg-gray-200 ml-2 px-2 disabled:bg-gray-300"
        disabled={pending}
        type="submit"
      >
        send
      </button>
    );
  };
  return (
    <div>
      <form action={formAction}>
        <input className="bg-gray-200 " type="text" id="name" name="name" />
        <SubmitButton />
        <div>{state.error}</div>
      </form>
    </div>
  );
};

export default ServerActionsPage;
