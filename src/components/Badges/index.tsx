'use client'
import React from "react";
import BadgeOne from "@/components/Badges/BadgeOne";
import CodeTab from "../CodeTab";
const badges = [
    {
        text: "Primary",
        bgColor: "bg-primary",
        textColor: "text-white",
    },
    {
        text: "Secondary",
        bgColor: "bg-[#13C296]",
        textColor: "text-white",
    },
    {
        text: "Dark",
        bgColor: "bg-[#212B36]",
        textColor: "text-white",
    },
    {
        text: "Gray",
        bgColor: "bg-[#637381]",
        textColor: "text-white",
    },
    {
        text: "Light",
        bgColor: "bg-[#EFEFEF]",
        textColor: "text-[#212B36]",
    },
    {
        text: "Warning",
        bgColor: "bg-[#F9C107]",
        textColor: "text-[#212B36]",
    },
    {
        text: "Danger",
        bgColor: "bg-[#DC3545]",
        textColor: "text-white",
    },
    {
        text: "Success",
        bgColor: "bg-[#3CA745]",
        textColor: "text-white",
    },
    {
        text: "Info",
        bgColor: "bg-[#3BA2B8]",
        textColor: "text-white",
    },
];

const borderedBadges = badges.map(badge => ({
    ...badge,
    borderColor: `border-${badge.bgColor.split('[')[0]}`
}));

const roundedBadges = badges.map(badge => ({
    ...badge,
    rounded: true
}));

const borderedRoundedBadges = borderedBadges.map(badge => ({
    ...badge,
    rounded: true
}));

const codeStringOne = `
import React, { useState } from "react";
import BadgeOne from "@/BadgeOne";
const BadgeContainer: React.FC = () => {
return (
<BadgeOne text="按钮" bgColor="bg-primary" textColor="text-white" rounded={false} />
<BadgeOne text="按钮" bgColor="bg-[#F9C107]" textColor="text-white" borderColor="border-red" rounded={true} />
);
};
`;

const BadgeContainer: React.FC = () => {
    return (
        <CodeTab codeString={codeStringOne}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4 sm:p-6 xl:p-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4.5">
                {badges.map((badge, index) => (
                    <BadgeOne key={index} {...badge} />
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4.5 mt-4">
                {borderedBadges.map((badge, index) => (
                    <BadgeOne key={index} {...badge} />
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4.5 mt-4">
                {roundedBadges.map((badge, index) => (
                    <BadgeOne key={index} {...badge} />
                ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4.5 mt-4">
                {borderedRoundedBadges.map((badge, index) => (
                    <BadgeOne key={index} {...badge} />
                ))}
            </div>
        </div>
        </CodeTab>
    );
};

export default BadgeContainer;
