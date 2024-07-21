import React from "react";
import Image from "next/image";

interface AvatarItemProps {
  image: string;
  width: number;
  height: number;
  rounded?: boolean;
}


interface AvatarOneProps {
  avatars: AvatarItemProps[];
}

const AvatarItem: React.FC<AvatarItemProps> = ({ image, width, height, rounded = true }) => {
  return (
    <div style={{ width, height, borderRadius: rounded ? '50%' : '0', overflow: 'hidden' }}>
      <Image
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "auto",
        }}
        src={image}
        alt="User"
        priority
      />
    </div>
  );
};

const AvatarOne: React.FC<AvatarOneProps> = ({ avatars }) => {
  return (
    <div className="flex items-center gap-6">
      {avatars.map((item, index) => (
        <AvatarItem
          key={index}
          image={item.image}
          width={item.width}
          height={item.height}
          rounded={item.rounded}
        />
      ))}
    </div>
  );
};

export default AvatarOne;
