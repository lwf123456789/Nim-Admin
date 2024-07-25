'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Column } from "react-table";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DataTableOne from "@/components/DataTables/DataTableOne";
import { Employee } from "@/types/Employee";
import { NickNameIcon, EmailIcon, BioIcon } from "@/components/Icons";
import ModalOne from "@/components/Modals/ModalOne";


const UserListPage = () => {
  //表格mk数据
  const tableData: Employee[] = [
    {
      id: "101",
      nickName: "张三",
      phoneNumber: "13800138000",
      userName: "zhangsan",
      bio: "张三是一位软件工程师，擅长前端开发。",
      status: "活跃"
    },
    {
      id: "102",
      nickName: "李四",
      phoneNumber: "13800138001",
      userName: "lisi",
      bio: "李四是一位网络工程师，负责网络维护。",
      status: "停用"
    },
    {
      id: "103",
      nickName: "王五",
      phoneNumber: "13800138002",
      userName: "wangwu",
      bio: "王五是数据库管理员，负责数据库管理。",
      status: "活跃"
    },
    {
      id: "104",
      nickName: "赵六",
      phoneNumber: "13800138003",
      userName: "zhaoliu",
      bio: "赵六是系统分析师，负责系统分析和设计。",
      status: "警告"
    },
    {
      id: "105",
      nickName: "孙七",
      phoneNumber: "13800138004",
      userName: "sunqi",
      bio: "孙七是测试工程师，负责软件测试。",
      status: "活跃"
    },
    {
      id: "106",
      nickName: "周八",
      phoneNumber: "13800138005",
      userName: "zhouba",
      bio: "周八是产品经理，负责产品规划。",
      status: "停用"
    },
    {
      id: "107",
      nickName: "吴九",
      phoneNumber: "13800138006",
      userName: "wujin",
      bio: "吴九是UI设计师，负责界面设计。",
      status: "活跃"
    },
    {
      id: "108",
      nickName: "郑十",
      phoneNumber: "13800138007",
      userName: "zhengshi",
      bio: "郑十是运维工程师，负责系统运维。",
      status: "警告"
    },
    {
      id: "109",
      nickName: "王一",
      phoneNumber: "13800138008",
      userName: "wangyi",
      bio: "王一是项目经理，负责项目管理。",
      status: "活跃"
    },
    {
      id: "110",
      nickName: "李二",
      phoneNumber: "13800138009",
      userName: "lier",
      bio: "李二是技术支持，负责客户支持。",
      status: "停用"
    }
  ];

  //列名配置
  const columns: Column<Employee>[] = [
    {
      Header: "名字",
      accessor: "nickName",
    },
    {
      Header: "手机号码",
      accessor: "phoneNumber",
    },
    {
      Header: "用户名",
      accessor: "userName",
    },
    {
      Header: "个人介绍",
      accessor: "bio",
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

  //模态框的配置
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

  //表单校验配置
  const validateNotEmpty = (value: any) => (value ? null : "此项为必填项!");
  const validationRules = {
    nickName: validateNotEmpty,
    phoneNumber: validateNotEmpty,
    emailAddress: validateNotEmpty,
    userName: validateNotEmpty,
    bio: validateNotEmpty,
  };

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
    console.log('this is create',userData);
  };

  const handleUpdateUser = async (userData: any) => {
    console.log('this is update',userData);
  };

  const handleDeleteUser = async (user: any) => {
    if (window.confirm('确定要删除这条记录吗？')) {
      console.log('this is del',user);
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
    <DefaultLayout>
      <Breadcrumb pageName="用户信息管理" />

      <div>
        <DataTableOne
          handleDetail={handleDetail}//详情操作
          selectedRow={selectedRow} // 传递 selectedRow 状态
          setSelectedRow={setSelectedRow} // 传递 setSelectedRow 函数
          columns={columns}//列配置
          data={tableData}//表格数据
          handleOpenModal={handleOpenModal} // 传递打开模态框的方法
          handleDelete={handleDeleteUser}//删除操作
        />

        {isModalOpen && (
          <ModalOne
            onSubmit={handleSubmit} // 传递 onSubmit 回调函数
            title={modalMode === "create" ? "新增" : modalMode === "edit" ? "修改" : "查看详情"}
            subTitle="填写信息"
            fields={modalFields}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            initialData={selectedRow} // 初始化数据，可以根据需要设置
            mode={modalMode}
            modalType={modalType}
            validationRules={validationRules} // 传递校验规则
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default UserListPage;
