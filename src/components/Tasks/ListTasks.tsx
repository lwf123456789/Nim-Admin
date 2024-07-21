"use client";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TaskHeader from "@/components/TaskHeader";
import Drag from "@/js/drag";
import Task from "@/components/Task";

const TaskList: React.FC = () => {
  useEffect(() => {
    Drag();
  });

  const todoTasks = [
    { id: "taskCheckbox1", name: "任务一" },
    { id: "taskCheckbox2", name: "任务二" },
    { id: "taskCheckbox3", name: "任务三" },
  ];

  const progressTasks = [
    { id: "taskCheckbox4", name: "任务一" },
    { id: "taskCheckbox5", name: "任务二", checked: true },
  ];

  const completedTasks = [
    { id: "taskCheckbox6", name: "任务一" },
    { id: "taskCheckbox7", name: "任务一" },
    { id: "taskCheckbox8", name: "任务一", checked: true },
    { id: "taskCheckbox9", name: "任务二", checked: true },
  ];

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="任务列表1" />

        {/* <!-- Task Header Start --> */}
        <TaskHeader />
        {/* <!-- Task Header End --> */}

        {/* <!-- Task List Wrapper Start --> */}
        <div className="mt-9 flex flex-col gap-9">
          {/* <!-- Todo list --> */}
          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              代办事项 (03)
            </h4>
            <Task title="任务标题" tasks={todoTasks} />
            <Task title="任务标题" tasks={progressTasks} />
          </div>

          {/* <!-- Progress list --> */}
          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              赶工中 (01)
            </h4>
            <Task title="任务标题" tasks={progressTasks} />
          </div>

          {/* <!-- Completed list --> */}
          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              已完成 (01)
            </h4>
            <Task title="任务标题" tasks={completedTasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
