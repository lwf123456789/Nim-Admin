'use client'
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CardsItemOne from "@/components/cards/CardsItemOne";
import TeamTwo from "@/components/Teams/TeamTwo";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CodeTab from "@/components/CodeTab";

const cardsItemOneData = [
  {
    imageSrc: "https://cdn.pixabay.com/photo/2023/11/21/13/29/ai-generated-8403411_640.jpg",
    name: "Mr Chen",
    role: "内容编写者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_960_720.jpg",
    cardTitle: "使用Next.js开发现代应用",
    cardContent:
      "通过Next.js，我们可以快速构建高效、可扩展的现代Web应用，为用户提供卓越的体验。",
  },
  {
    imageSrc: "https://cdn.pixabay.com/photo/2023/11/21/13/29/ai-generated-8403412_640.jpg",
    name: "Mr Lin",
    role: "Web开发者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2024/02/14/14/36/reading-desk-8573604_640.jpg",
    cardTitle: "在项目中集成React",
    cardContent:
      "React使我们的开发流程更加灵活和高效，帮助我们创建复杂的用户界面，并保持代码的可维护性。",
  },

  {
    imageSrc: "https://cdn.pixabay.com/photo/2024/03/05/17/53/ai-generated-8614982_640.jpg",
    name: "JR UU",
    role: "前端开发者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_640.jpg",
    cardTitle: "前端开发的最佳实践",
    cardContent:
      "遵循前端开发的最佳实践，我们能确保代码的高性能和可读性，从而为用户提供更好的使用体验。",
  },
];

const Cards: React.FC = () => {
  const codeStringOne = `
import React, { useState } from "react";
import CardsItemOne from "@/components/cards/CardsItemOne";
const cardsItemOneData = [
  {
    imageSrc: "https://cdn.pixabay.com/photo/2023/11/21/13/29/ai-generated-8403411_640.jpg",
    name: "Mr Chen",
    role: "内容编写者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_960_720.jpg",
    cardTitle: "使用Next.js开发现代应用",
    cardContent:
      "通过Next.js，我们可以快速构建高效、可扩展的现代Web应用，为用户提供卓越的体验。",
  },
  {
    imageSrc: "https://cdn.pixabay.com/photo/2023/11/21/13/29/ai-generated-8403412_640.jpg",
    name: "Mr Lin",
    role: "Web开发者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2024/02/14/14/36/reading-desk-8573604_640.jpg",
    cardTitle: "在项目中集成React",
    cardContent:
      "React使我们的开发流程更加灵活和高效，帮助我们创建复杂的用户界面，并保持代码的可维护性。",
  },

  {
    imageSrc: "https://cdn.pixabay.com/photo/2024/03/05/17/53/ai-generated-8614982_640.jpg",
    name: "JR UU",
    role: "前端开发者",
    cardImageSrc: "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_640.jpg",
    cardTitle: "前端开发的最佳实践",
    cardContent:
      "遵循前端开发的最佳实践，我们能确保代码的高性能和可读性，从而为用户提供更好的使用体验。",
  },
];

const Cards: React.FC = () => {
  return (
  <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {cardsItemOneData.map((card, key) => (
          <CardsItemOne
            key={key}
            imageSrc={card.imageSrc}
            name={card.name}
            role={card.role}
            cardImageSrc={card.cardImageSrc}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>
  );
};

export default Cards;
`;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="卡片" />
      <CodeTab codeString={codeStringOne}>
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
        {cardsItemOneData.map((card, key) => (
          <CardsItemOne
            key={key}
            imageSrc={card.imageSrc}
            name={card.name}
            role={card.role}
            cardImageSrc={card.cardImageSrc}
            cardTitle={card.cardTitle}
            cardContent={card.cardContent}
          />
        ))}
      </div>
      <div className="flex flex-col gap-7.5 mt-8">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4 sm:p-6 xl:p-9 2xl:p-15">
            <TeamTwo />
          </div>
        </div>
      </div>
      </CodeTab>
    </DefaultLayout>
  );
};

export default Cards;
