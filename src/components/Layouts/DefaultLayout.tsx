"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import menuData from "@/data/menuData";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true); // 初始为展开状态
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* 侧边栏 */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} menuData={menuData} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
        {/* 侧边栏 end */}

        {/* 主体区域 */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* 头部 */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
          {/* 头部end */}

          {/* 内容 */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* 内容end */}
        </div>
        {/* <!-- 主体区域end */}
      </div>
    </>
  );
}
