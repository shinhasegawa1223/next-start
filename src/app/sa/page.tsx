import { createTask } from "@/actions/sampleActions";
import React from "react";

const ServerActionsPage = () => {
  const taskId: number = 1;
  const createForm = createTask.bind(null, taskId);
  return (
    <div>
      <form action={createForm}>
        <input className="bg-gray-200 " type="text" id="name" name="name" />

        <button className="bg-gray-200 ml-2 px-2" type="submit">
          send
        </button>
      </form>
    </div>
  );
};

export default ServerActionsPage;
