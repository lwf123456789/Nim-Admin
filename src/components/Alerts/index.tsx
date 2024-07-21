"use client";
import React from "react";
import AlertOne from "@/components/Alerts/AlertOne";
import AlertTwo from "@/components/Alerts/AlertTwo";
import { metadata } from '@/js/metadata';
import CodeTab from "../CodeTab";
const AlertPage = () => {

const codeStringOne = `
import AlertOne from "@/components/Alerts/AlertOne";
<div className="space-y-4">
    <AlertOne type="warning" title="注意" subTitle="您有未处理的事项，请及时处理以避免影响系统运行。" />
    <AlertOne type="success" title="消息发送成功" subTitle="您的消息已成功发送。感谢您的耐心等待。" />
    <AlertOne type="danger" title="提交过程中出现1个错误" subTitle="您的输入有误，请检查后重新提交。" />
</div>
`;
const codeStringTwo = `
import AlertTwo from "@/components/Alerts/AlertTwo";
<div className="space-y-4">
    <AlertTwo type="success" message="您的账户信息已保存。" />
    <AlertTwo type="danger" message="您的邮箱地址无效。" />
    <AlertTwo type="warning" message="您当前使用的是免费计划。" />
    <AlertTwo type="info" message="我们已经更新了一些内容。" />
</div>
`;


    return (
        <>
            <div className="space-y-4">
                <CodeTab codeString={codeStringOne}>
                    <AlertOne type="warning" title="注意" subTitle="您有未处理的事项，请及时处理以避免影响系统运行。" />
                    <AlertOne type="success" title="消息发送成功" subTitle="您的消息已成功发送。感谢您的耐心等待。" />
                    <AlertOne type="danger" title="提交过程中出现1个错误" subTitle="您的输入有误，请检查后重新提交。" />
                </CodeTab>
            </div>
            <div className="space-y-4 mt-8">
                <CodeTab codeString={codeStringTwo}>
                    <AlertTwo type="success" message="您的账户信息已保存。" />
                    <AlertTwo type="danger" message="您的邮箱地址无效。" />
                    <AlertTwo type="warning" message="您当前使用的是免费计划。" />
                    <AlertTwo type="info" message="我们已经更新了一些内容。" />
                </CodeTab>
            </div>
        </>
    );
};

export default AlertPage;
