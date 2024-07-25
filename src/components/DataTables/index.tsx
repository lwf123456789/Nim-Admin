"use client";
import { Employee } from "@/types/Employee";
import { Column } from "react-table";
import { NickNameIcon, EmailIcon, BioIcon } from "@/components/Icons";
import React, { useState } from "react";
import DataTableOne from "@/components/DataTables/DataTableOne";
const DataTables: React.FC = () => {
  const tableData: any[] = [
    {
      id: "155",
      name: "王伟",
      position: "高级设计师",
      duration: "3年",
      birthDate: "1977年11月25日",
      email: "wangwei@example.com",
      phone: "+86(10)-1234-5678",
      address: "北京朝阳区",
      status: "活跃",
    },
    {
      id: "156",
      name: "李娜",
      position: "前端开发工程师",
      duration: "3年",
      birthDate: "1966年11月25日",
      email: "lina@example.com",
      phone: "+86(21)-8765-4321",
      address: "上海浦东新区",
      status: "停用",
    },
    {
      id: "157",
      name: "张强",
      position: "产品经理",
      duration: "3年",
      birthDate: "1955年11月25日",
      email: "zhangqiang@example.com",
      phone: "+86(20)-2345-6789",
      address: "广州天河区",
      status: "活跃",
    },
    {
      id: "158",
      name: "陈晓东",
      position: "后端开发工程师",
      duration: "3年",
      birthDate: "1979年11月25日",
      email: "chenxiaodong@example.com",
      phone: "+86(29)-3456-7890",
      address: "西安高新区",
      status: "停用",
    },
    {
      id: "159",
      name: "赵敏",
      position: "测试工程师",
      duration: "3年",
      birthDate: "1969年11月25日",
      email: "zhaomin@example.com",
      phone: "+86(28)-4567-8901",
      address: "成都武侯区",
      status: "活跃",
    },
    {
      id: "160",
      name: "刘洋",
      position: "UI设计师",
      duration: "3年",
      birthDate: "1989年11月25日",
      email: "liuyang@example.com",
      phone: "+86(25)-5678-9012",
      address: "南京建邺区",
      status: "停用",
    },
    {
      id: "161",
      name: "孙丽",
      position: "项目经理",
      duration: "3年",
      birthDate: "1979年11月25日",
      email: "sunli@example.com",
      phone: "+86(24)-6789-0123",
      address: "沈阳和平区",
      status: "活跃",
    },
    {
      id: "162",
      name: "吴刚",
      position: "运维工程师",
      duration: "3年",
      birthDate: "1979年11月25日",
      email: "wugang@example.com",
      phone: "+86(23)-7890-1234",
      address: "重庆渝北区",
      status: "停用",
    },
    {
      id: "163",
      name: "何梅",
      position: "市场专员",
      duration: "3年",
      birthDate: "1945年11月25日",
      email: "hemei@example.com",
      phone: "+86(22)-8901-2345",
      address: "天津南开区",
      status: "活跃",
    },
    {
      id: "164",
      name: "周强",
      position: "数据分析师",
      duration: "3年",
      birthDate: "2000年11月25日",
      email: "zhouqiang@example.com",
      phone: "+86(27)-9012-3456",
      address: "武汉洪山区",
      status: "停用",
    },
    {
      id: "165",
      name: "杨洋",
      position: "技术支持工程师",
      duration: "3年",
      birthDate: "1999年11月25日",
      email: "yangyang@example.com",
      phone: "+86(26)-0123-4567",
      address: "青岛市南区",
      status: "活跃",
    },
    {
      id: "166",
      name: "陈晓华",
      position: "售前工程师",
      duration: "3年",
      birthDate: "1965年11月25日",
      email: "chenxiaohua@example.com",
      phone: "+86(21)-1234-5678",
      address: "上海浦东新区",
      status: "停用",
    },
    {
      id: "167",
      name: "徐凯",
      position: "软件工程师",
      duration: "3年",
      birthDate: "1975年11月25日",
      email: "xukai@example.com",
      phone: "+86(10)-2345-6789",
      address: "北京海淀区",
      status: "活跃",
    },
    {
      id: "168",
      name: "张三",
      position: "硬件工程师",
      duration: "3年",
      birthDate: "1945年11月25日",
      email: "zhangsan@example.com",
      phone: "+86(20)-3456-7890",
      address: "广州越秀区",
      status: "停用",
    },
    {
      id: "169",
      name: "李四",
      position: "网络工程师",
      duration: "3年",
      birthDate: "1998年11月25日",
      email: "lisi@example.com",
      phone: "+86(28)-4567-8901",
      address: "成都高新区",
      status: "活跃",
    },
  ];


  const columns: Column<any>[] = [
    {
      Header: "名字",
      accessor: "name",
    },
    {
      Header: "职位",
      accessor: "position",
    },
    {
      Header: "出生日期",
      accessor: "birthDate",
    },
    {
      Header: "邮箱",
      accessor: "email",
    },
    {
      Header: "所在地区",
      accessor: "address",
    },
    {
      Header: "状态",
      accessor: "status",
      Cell: ({ value }) => (
        <span
          className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${value === "活跃"
            ? "bg-success text-success"
            : value === "停用"
              ? "bg-danger text-danger"
              : "bg-warning text-warning"
            }`}
        >
          {value}
        </span>
      )
    }
  ];

  const modalFields = [
    {
      label: "昵称",
      name: "nickName",
      type: "text",
      placeholder: "请输入昵称...",
      icon: <NickNameIcon />,
    },
    {
      label: "手机号码",
      name: "phoneNumber",
      type: "text",
      placeholder: "请输入手机号...",
    },
    {
      label: "邮箱",
      name: "emailAddress",
      type: "email",
      placeholder: "请输入邮箱...",
      icon: <EmailIcon />,
    },
    {
      label: "用户名",
      name: "userName",
      type: "text",
      placeholder: "请输入用户名...",
    },
    {
      label: "个人介绍",
      name: "bio",
      type: "text",
      placeholder: "请输入个人介绍...",
      icon: <BioIcon />,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "view">("create");
  const [modalType, setModalType] = useState<string>("normal");
  const [selectedRow, setSelectedRow] = useState<any>({});
  const handleOpenModal = (type: string, mode: "create" | "edit" | "view") => {
    setModalType(type);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateUser = async (userData: any) => {
    console.log('this is create', userData);
  };

  const handleUpdateUser = async (userData: any) => {
    console.log('this is update', userData);
  };

  const handleDeleteUser = async (user: any) => {
    if (window.confirm('确定要删除这条记录吗？')) {
      console.log('this is del', user);
    }
  };

  const handleDetail = async (user: any) => {
    console.log('this is detail', user);
  }

  const handleSubmit = (data: any) => {
    if (modalMode === "create") {
      handleCreateUser(data);
    } else if (modalMode === "edit") {
      handleUpdateUser(data);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <DataTableOne
          handleDetail={handleDetail}//详情操作
          selectedRow={selectedRow} // 传递 selectedRow 状态
          setSelectedRow={setSelectedRow} // 传递 setSelectedRow 函数
          columns={columns}//列配置
          data={tableData}//表格数据
          handleOpenModal={handleOpenModal} // 传递打开模态框的方法
          handleDelete={handleDeleteUser}//删除操作
        />
      </div>
    </>
  );
};

export default DataTables;
