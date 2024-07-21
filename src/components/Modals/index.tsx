"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ModalOne from "@/components/Modals/ModalOne";
import ModalTwo from "@/components/Modals/ModalTwo";
import ModalThree from "@/components/Modals/ModalThree";
import { NickNameIcon, EmailIcon, BioIcon } from "@/components/Icons";
const Modals: React.FC = () => {
  
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

  const title = '新增数据'

  const subTitle = '数据填写'
  return (
    <>
      <Breadcrumb pageName="模态框" />

      <div className="rounded-sm border border-stroke bg-white p-10 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap justify-center gap-5">
        <ModalOne title={title} subTitle={subTitle} fields={modalFields} />
          <ModalTwo />
          <ModalThree />
        </div>
      </div>
    </>
  );
};

export default Modals;
