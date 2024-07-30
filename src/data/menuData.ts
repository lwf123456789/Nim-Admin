// data/menuData.ts

import { MenuItem } from '@/types/menu';

const menuData: MenuItem[] = [
  {
    title: "仪表盘",
    path: "/dashboard",
    icon: "https://cdn-icons-png.flaticon.com/512/8901/8901603.png",
    subMenu: [
      { title: "首页", path: "/" },
      { title: "数据分析", path: "/dashboard/analytics" },
      { title: "CRM", path: "/dashboard/crm" }
    ]
  },
  {
    title: "用户模块",
    path: "/user",
    icon: "https://cdn-icons-png.flaticon.com/128/2098/2098402.png",
    subMenu: [{ title: "用户信息管理", path: "/user/userList" }]
  },
  {
    title: "UI库",
    path: "/ui",
    icon: "https://cdn-icons-png.flaticon.com/128/12294/12294398.png",
    subMenu: [
      { title: "折叠面板", path: "/ui/accordion" },
      { title: "警告提示", path: "/ui/alerts" },
      { title: "头像", path: "/ui/avatars" },
      { title: "标签", path: "/ui/tag" },
      { title: "面包屑", path: "/ui/breadcrumbs" },
      { title: "按钮", path: "/ui/buttons" },
      { title: "输入框", path: "/ui/input" },
      { title: "卡片", path: "/ui/cards" },
      { title: "轮播图", path: "/ui/carousel" },
      { title: "下拉框", path: "/ui/dropdowns" },
      { title: "时间选择", path: "/ui/date-picker" },
      { title: "图片", path: "/ui/images" },
      { title: "列表", path: "/ui/list" },
      { title: "模态框", path: "/ui/modals" },
      { title: "通知框", path: "/ui/notifications" },
      { title: "分页器", path: "/ui/pagination" },
      { title: "气泡卡片", path: "/ui/popovers" },
      { title: "进度条", path: "/ui/progress" },
      { title: "上传", path: "/ui/upload" },
      { title: "滑动", path: "/ui/slider" },
      { title: "开关", path: "/ui/switch" },
      { title: "加载中", path: "/ui/spinners" },
      { title: "表格", path: "/ui/tables" },
      { title: "标签页", path: "/ui/tabs" },
      { title: "提示框", path: "/ui/tool-tip" },
      { title: "音频", path: "/ui/videos" }
    ]
  },
  {
    title: "任务",
    path: "/tasks",
    icon: "https://cdn-icons-png.flaticon.com/128/2098/2098402.png",
    subMenu: [
      { title: "计划表", path: "/tasks/calendar" },
      { title: "任务列表1", path: "/tasks/task-list" },
      { title: "任务列表2", path: "/tasks/task-kanban" }
    ]
  },
  {
    title: "表单元素",
    path: "/forms",
    icon: "https://cdn-icons-png.flaticon.com/128/16931/16931171.png",
    subMenu: [
      { title: "表单布局", path: "/forms/form-layout" }
    ]
  },
  {
    title: "常用页面",
    path: "/pages",
    icon: "https://cdn-icons-png.flaticon.com/128/1324/1324931.png",
    subMenu: [
      { title: "登录", path: "/pages/signin" },
      { title: "注册", path: "/pages/signup" },
      { title: "验证码", path: "/pages/verify-login" },
      { title: "倒计时", path: "/pages/coming-soon" },
      { title: "聊天窗口", path: "/pages/messages" },
      { title: "文件管理", path: "/pages/file-manager" },
      { title: "SASS套餐", path: "/pages/pricing-tables" },
      { title: "成功", path: "/pages/mail-success" },
      { title: "错误", path: "/pages/error-page" },
      { title: "隐私与条款", path: "/pages/terms-conditions" }
    ]
  },
  {
    title: "图表",
    path: "/chart",
    icon: "https://cdn-icons-png.flaticon.com/128/5723/5723208.png",
    subMenu: [
      { title: "图表模版", path: "/chart/basic-chart" }
    ]
  },
];

export default menuData;
