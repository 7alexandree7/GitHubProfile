"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
}

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#727AF9",
  duration = "1.5s",
  ...props
}: PulsatingButtonProps) {
  return (
    <button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-black bg-violet-500 dark:bg-violet-500 px-4 py-2",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Texto ou conteúdo do botão */}
      <a  href='https://github.com/7alexandree7' target="_blank" className="relative z-10">Look Profile</a>
      {/* Camada de pulsação */}
      <div
        className="absolute top-1/2 left-1/2 w-full h-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          backgroundColor: pulseColor,
          animationDuration: duration,
        }}
      />
    </button>
  );
}
