"use client";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TaskHeader from "@/components/TaskHeader";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";
import Drag from "@/js/drag";
import TaskCard from "@/components/TaskTwo";

const TaskKanban: React.FC = () => {
  useEffect(() => {
    Drag();
  });

  const todoTasks = [
    { id: "taskCheckbox1", name: "任务一" },
    { id: "taskCheckbox2", name: "任务二" },
    { id: "taskCheckbox3", name: "任务三" },
  ];

  const inProgressTasks = [
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
        <Breadcrumb pageName="任务列表2" />

        <TaskHeader />

        <div className="mt-9 grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              代办事项 (03)
            </h4>
            <TaskCard title="任务标题" tasks={todoTasks} />
          </div>

          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              赶工中 (02)
            </h4>
            <TaskCard
              title="任务标题"
              tasks={inProgressTasks}
              description="这是SASS系统开发任务..."
              imageUrl="https://cdn-icons-png.freepik.com/256/4345/4345800.png?semt=ais_hybrid"
            />
          </div>

          <div className="swim-lane flex flex-col gap-5.5">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              已完成 (04)
            </h4>
            <TaskCard title="任务标题" tasks={completedTasks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskKanban;
