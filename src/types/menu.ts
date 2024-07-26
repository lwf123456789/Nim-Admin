export interface SubMenu {
    title: string;
    path: string;
}

export interface MenuItem {
    title: string;
    path: string;
    icon: string;
    subMenu?: SubMenu[];
}