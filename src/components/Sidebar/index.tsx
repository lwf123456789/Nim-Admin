// components/Sidebar.tsx

import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { MenuItem } from '@/types/menu';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  menuData: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, menuData }) => {
  const pathname = usePathname();
  const sidebar = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(localStorage.getItem("sidebar-expanded") === "true");

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current || !sidebarOpen) return;

      // 使用类型断言确保 target 是 Node 类型
      if (
        !(target instanceof Node) ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }

      setSidebarOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [setSidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image width={60} height={60} src="https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg" alt="Logo" priority />
            <h1 className="ml-4 text-2xl font-extrabold">Nim Admin</h1>
          </div>
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        />
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {menuData.map((item, index) => (
            <SidebarLinkGroup key={index} activeCondition={pathname.includes(item.path)}>
              {(handleClick, open) => (
                <>
                  <Link
                    href={item.path}
                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes(item.path) && "bg-graydark dark:bg-meta-4"}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.subMenu) {
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                      } else {
                        // 如果没有子菜单，不做展开处理，可以直接导航
                      }
                    }}
                  >
                    <Image src={item.icon} alt="" width={18} height={18} />
                    <p className="text-lg">{item.title}</p>
                    {item.subMenu && (
                      <svg
                        className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z" />
                      </svg>
                    )}
                  </Link>
                  {item.subMenu && (
                    <div className={`translate transform overflow-hidden ${!open && "hidden"}`}>
                      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.path}
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === subItem.path && "text-white"}`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </SidebarLinkGroup>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
