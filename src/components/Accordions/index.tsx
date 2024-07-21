"use client";
import AccordionOne from "@/components/Accordions/AccordionOne";
import AccordionTwo from "@/components/Accordions/AccordionTwo";
import { FAQ } from "@/types/faq";
import CodeTab from "../CodeTab";


const AccordionPage: React.FC = () => {
  const faqsOne: FAQ[] = [
    {
      id: 1,
      header: "我们的团队多快能交付您的第一个软件项目？",
      text: "在两周内，您将收到您的第一个软件项目。这段时间不仅包括我们对您的业务需求进行的深入分析，还包括为您定制的详细开发计划。我们的团队将为您提供高质量的软件解决方案，确保项目的每一个细节都符合您的期望。选择我们，让您的软件开发之旅变得高效且无忧！"
    },
    {
      id: 2,
      header: "我们使用什么技术堆栈进行开发？",
      text: "我们使用最先进和流行的技术堆栈，包括但不限于：React, Node.js, TypeScript, GraphQL 等。这些技术不仅能够确保项目的高性能和高可维护性，还能快速适应变化，满足您的业务需求。"
    }
  ];

  const faqsTwo: FAQ[] = [
    {
      id: 1,
      header: "我们的团队多快能交付您的第一个软件项目？",
      text: "在两周内，您将收到您的第一个软件项目。这段时间不仅包括我们对您的业务需求进行的深入分析，还包括为您定制的详细开发计划。我们的团队将为您提供高质量的软件解决方案，确保项目的每一个细节都符合您的期望。选择我们，让您的软件开发之旅变得高效且无忧！"
    }
  ];

  const codeStringTwo = `
import React, { useState } from "react";
import AccordionTwo from "@/AccordionTwo";

interface FAQ {
  header: string;
  id: number;
  text: string;
};

const faqsTwo: FAQ[] = [
    {
      id: 1,
      header: "我们的团队多快能交付您的第一个软件项目？",
      text: "在两周内，您将收到您的第一个软件项目。这段时间不仅包括我们对您的业务需求进行的深入分析，还包括为您定制的详细开发计划。我们的团队将为您提供高质量的软件解决方案，确保项目的每一个细节都符合您的期望。选择我们，让您的软件开发之旅变得高效且无忧！"
    }
  ];

const AccordionPage: React.FC = () => {
  return (
   <AccordionTwo faqs={faqsTwo} />
  );
};

export default AccordionPage;
`;

  const codeStringOne = `
import React, { useState } from "react";
import AccordionOne from "@/AccordionOne";

interface FAQ {
  header: string;
  id: number;
  text: string;
};

const faqsOne: FAQ[] = [
    {
      id: 1,
      header: "我们的团队多快能交付您的第一个软件项目？",
      text: "在两周内，您将收到您的第一个软件项目。这段时间不仅包括我们对您的业务需求进行的深入分析，还包括为您定制的详细开发计划。我们的团队将为您提供高质量的软件解决方案，确保项目的每一个细节都符合您的期望。选择我们，让您的软件开发之旅变得高效且无忧！"
    },
    {
      id: 2,
      header: "我们使用什么技术堆栈进行开发？",
      text: "我们使用最先进和流行的技术堆栈，包括但不限于：React, Node.js, TypeScript, GraphQL 等。这些技术不仅能够确保项目的高性能和高可维护性，还能快速适应变化，满足您的业务需求。"
    }
  ];

const AccordionPage: React.FC = () => {
  return (
   <AccordionOne faqs={faqsOne} />
  );
};

export default AccordionPage;
`;

  return (
    <>
      <CodeTab codeString={codeStringOne}>
        <AccordionOne faqs={faqsOne} />
      </CodeTab>
      <CodeTab codeString={codeStringTwo}>
        <AccordionTwo faqs={faqsTwo} />
      </CodeTab>
    </>
  );
};

export default AccordionPage;
