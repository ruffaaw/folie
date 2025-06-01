import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CSSProperties } from "react";

interface SlideArrowButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: string;
  primaryColor?: string;
  backgroundColor?: string;
  href?: string;
}

export default function Button({
  text = "Poznaj naszą ofertę",
  primaryColor = "#333333",
  backgroundColor = "#d0ebff",
  href = "",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  const buttonStyles: CSSProperties = {
    "--primary-color": primaryColor,
    "--bg-color": backgroundColor,
    "--text-color": "#333333",
    "--hover-text-color": "#ffffff",
  } as CSSProperties;

  return (
    <Link
      className={`
        group relative rounded-full 
        py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        overflow-hidden transition-all duration-300 ease-in-out 
        ${className}
      `}
      style={{
        backgroundColor: backgroundColor,
        ...buttonStyles,
      }}
      href={href}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-10 sm:w-12 md:w-16 items-center justify-center 
                  group-hover:justify-end rounded-full transition-all duration-300 ease-in-out 
                  group-hover:w-full"
        style={{ backgroundColor: primaryColor }}
      >
        <span className="group-hover:mr-4 sm:group-hover:mr-6 text-white transition-all duration-300 ease-in-out">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </span>
      </div>

      <span
        className="relative left-2 sm:left-3 md:left-4 z-10 whitespace-nowrap 
                      px-6 sm:px-7 md:px-8 text-dark transition-all duration-300 ease-in-out 
                      group-hover:-left-1 sm:group-hover:-left-2 md:group-hover:-left-3 
                      group-hover:text-white"
      >
        {text}
      </span>
    </Link>
  );
}
