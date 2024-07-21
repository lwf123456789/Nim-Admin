'use client'
import Link from "next/link";
import React, { useState } from 'react';
import '@/js/metadata'
interface ButtonProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  border?: boolean;
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const ButtonOne: React.FC<ButtonProps> = ({
  href,
  text,
  icon,
  onClick,
  loading,
  className,
  border,
  borderColor,
  textColor,
  backgroundColor,
  borderRadius
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-5 py-2 text-center font-medium transition duration-150 ease-in-out transform hover:scale-105';
  const borderStyles = border ? `border ${borderColor}` : '';
  const bgStyles = backgroundColor || 'bg-primary';
  const textStyles = textColor || 'text-white';
  const loadingStyles = loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90';

  const content = (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </>
      )}
    </>
  );

  return href ? (
    <Link href={href} className={`${baseStyles} ${borderStyles} ${bgStyles} ${textStyles} ${loadingStyles} ${className} ${borderRadius}`} onClick={onClick}>
      {content}
    </Link>
  ) : (
    <button className={`${baseStyles} ${borderStyles} ${bgStyles} ${textStyles} ${loadingStyles} ${className} ${borderRadius}`} onClick={onClick} disabled={loading}>
      {content}
    </button>
  );
};

export default ButtonOne;