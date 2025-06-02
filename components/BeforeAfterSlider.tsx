"use client";

import Image from "next/image";
import { useState, useRef } from "react";

export default function BeforeAfterSlider({
  before = "",
  altBefore = "",
  after = "",
  altAfter = "",
  sliderPos = 50,
}: {
  before?: string;
  altBefore?: string;
  after?: string;
  altAfter?: string;
  sliderPos?: number;
}) {
  const [sliderPosition, setSliderPosition] = useState(sliderPos);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(event.clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(event.touches[0].clientX);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full relative md:px-16 lg:px-32 mt-6 md:mt-8"
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        ref={containerRef}
        className="relative w-full lg:w-3/4 aspect-[10/7] m-auto overflow-hidden select-none touch-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
      >
        <Image
          alt={altAfter}
          src={after}
          fill
          draggable={false}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          unoptimized
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[10/7] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            src={before}
            alt={altBefore}
            className="object-cover"
            unoptimized
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-light cursor-ew-resize touch-none"
          style={{
            left: `calc(${sliderPosition}% - 1px)`,
          }}
        >
          <div className="bg-blue-light absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
        </div>
      </div>
    </div>
  );
}
