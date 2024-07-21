"use client";
import React from "react";
import AvatarOne from "./AvatarOne";
import CodeTab from "../CodeTab";
const avatarItems = [
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 24,
    height: 24,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 38,
    height: 38,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 52,
    height: 52,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 80,
    height: 80,
    rounded: true,
  },
];

const codeStringOne = `
import React, { useState } from "react";
import AvatarOne from "@/AvatarOne";

const avatarItems = [
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 24,
    height: 24,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 38,
    height: 38,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 52,
    height: 52,
    rounded: true,
  },
  {
    image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/programmer-2105401-1770286.png?f=webp&w=128",
    width: 80,
    height: 80,
    rounded: true,
  },
];
<AvatarOne avatars={avatarItems} />
`;

const ParentComponent: React.FC = () => {
  return (
    <div>
      <CodeTab codeString={codeStringOne}>
        <AvatarOne avatars={avatarItems} />
      </CodeTab>

    </div>
  );
};

export default ParentComponent;
