import React from "react";
import { Metadata } from "next";
import TaskList from "@/components/Tasks/ListTasks";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  icons:'https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg',
  title:
    "Nim Admin",
  description: "This is Next.js Template",
};
const TaskListPage = () => {
  return (
    <DefaultLayout>
      <TaskList />
    </DefaultLayout>
  );
};

export default TaskListPage;
