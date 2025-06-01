"use client";

import Image from "next/image";
import { useState } from "react";

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

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full relative px-4 sm:px-8 md:px-16 lg:px-32 mt-6 md:mt-8"
      onMouseUp={handleMouseUp}
    >
      <div
        className="relative w-full aspect-[390/200] m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
      >
        <Image
          alt={altAfter}
          src={after}
          fill
          draggable={false}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
        />

        <div
          className="absolute top-0 left-0 right-0 w-full aspect-[390/200] m-auto overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            fill
            priority
            draggable={false}
            src={before}
            alt={altBefore}
            className="object-cover"
          />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-blue-light cursor-ew-resize"
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
