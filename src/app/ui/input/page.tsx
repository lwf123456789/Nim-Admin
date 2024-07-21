'use client'
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import InputOne from "@/components/Inputs/InputOne";
import CodeTab from "@/components/CodeTab";

const Input: React.FC = () => {
  const [text, setText] = useState('');
  const [focusText, setFocusText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFocusTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFocusText(e.target.value);
  };

  const codeStringOne = `
import React, { useState } from "react";
import InputOne from "@/components/Inputs/InputOne";

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 p-6.5">
        <InputOne label="普通输入框" placeholder="请输入内容..." />

        <InputOne label="默认focus输入框" placeholder="请输入内容..." focus />

        <InputOne label="禁用状态" placeholder="请输入内容..." disabled />

        <InputOne
          label="textarea"
          placeholder="请输入内容..."
          type="textarea"
          rows={6}
          value={text}
          onChange={handleTextChange}
          showCharCount
          maxLength={200}
        />

        <InputOne
          label="focus textarea"
          placeholder="请输入内容..."
          type="textarea"
          rows={6}
          focus
          value={focusText}
          onChange={handleFocusTextChange}
          showCharCount
          maxLength={200}
        />

        <InputOne
          label="禁用状态"
          placeholder="请输入内容..."
          type="textarea"
          rows={6}
          disabled
        />
    </div>
  `;
  return (
    <DefaultLayout>
      <Breadcrumb pageName="输入框" />
      <CodeTab codeString={codeStringOne}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5.5 p-6.5">
          <InputOne label="普通输入框" placeholder="请输入内容..." />

          <InputOne label="默认focus输入框" placeholder="请输入内容..." focus />

          <InputOne label="禁用状态" placeholder="请输入内容..." disabled />

          <InputOne
            label="textarea"
            placeholder="请输入内容..."
            type="textarea"
            rows={6}
            value={text}
            onChange={handleTextChange}
            showCharCount
            maxLength={200}
          />

          <InputOne
            label="focus textarea"
            placeholder="请输入内容..."
            type="textarea"
            rows={6}
            focus
            value={focusText}
            onChange={handleFocusTextChange}
            showCharCount
            maxLength={200}
          />

          <InputOne
            label="禁用状态"
            placeholder="请输入内容..."
            type="textarea"
            rows={6}
            disabled
          />
        </div>
      </CodeTab>
    </DefaultLayout>
  );
};

export default Input;
