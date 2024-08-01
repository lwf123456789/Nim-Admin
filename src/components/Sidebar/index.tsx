import React, { useRef, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { MenuItem } from '@/types/menu';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  menuData: MenuItem[];
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, menuData, sidebarExpanded, setSidebarExpanded }) => {
  const pathname = usePathname();
  const router = useRouter();
  const sidebar = useRef<HTMLDivElement | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current || !sidebarOpen) return;

      if (!(target instanceof Node) || sidebar.current.contains(target) || trigger.current.contains(target)) {
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

  useEffect(() => {
    menuData.forEach(item => {
      if (item.subMenu && item.subMenu.some(subItem => pathname === subItem.path)) {
        setActiveMenu(item.path);
      }
    });
  }, [pathname, menuData]);

  const handleMainMenuClick = (path: string) => {
    setActiveMenu(activeMenu === path ? null : path);
    if (!sidebarExpanded) setSidebarExpanded(true);
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen ${sidebarExpanded ? 'w-64' : 'w-20'} flex-col overflow-y-auto bg-black duration-300 ease-in-out dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center">
            <Image width={sidebarExpanded ? 60 : 40} height={sidebarExpanded ? 60 : 40} src="https://apexcharts.com/wp-content/themes/apexcharts/img/apexcharts-logo-trimmed.svg" alt="Logo" priority />
            {sidebarExpanded && <span className="ml-4 text-2xl font-extrabold whitespace-nowrap overflow-hidden overflow-ellipsis">Nim Admin</span>}
          </div>
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          {/* Mobile toggle button content */}
        </button>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {menuData.map((item, index) => {
          const isActive = pathname.startsWith(item.path);
          const isExpanded = sidebarExpanded && activeMenu === item.path;

          return (
            <SidebarLinkGroup key={index} activeCondition={isExpanded}>
              {(handleClick, open) => (
                <>
                  <Link
                    href={item.path}
                    className={`group flex items-center p-2 text-base font-medium rounded-md ${isActive ? "text-white bg-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}
                    onClick={(e) => {
                      if (item.subMenu) {
                        e.preventDefault();
                        handleMainMenuClick(item.path);
                      } else {
                        router.push(item.path);
                      }
                    }}
                  >
                    <Image className="ml-3" src={item.icon} alt="icon" width={18} height={18} />
                    {sidebarExpanded && <span className="ml-3 whitespace-nowrap overflow-hidden overflow-ellipsis">{item.title}</span>}
                    {item.subMenu && sidebarExpanded && (
                      <svg
                        className={`ml-auto transform ${open ? "rotate-180" : ""}`}
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  {item.subMenu && (
                    <div className={`ml-10 space-y-1 ${!isExpanded ? "hidden" : ""}`}>
                      {item.subMenu.map((subItem, subIndex) => {
                        const isSubItemActive = pathname === subItem.path;
                        return (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className={`group flex items-center pl-3 py-1 pr-2 text-sm font-medium rounded-md ${isSubItemActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                          >
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </SidebarLinkGroup>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
