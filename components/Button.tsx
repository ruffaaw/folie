import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
  return (
    <Link
      className={`group relative rounded-full py-4 px-6 text-2xl ${className}`}
      style={{ backgroundColor: backgroundColor }}
      href={href}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-16 items-center justify-center group-hover:justify-end rounded-full transition-all duration-200 ease-in-out group-hover:w-full "
        style={{ backgroundColor: primaryColor }}
      >
        <span className="group-hover:mr-6 text-white transition-all duration-200 ease-in-out">
          <ArrowRight size={24} />
        </span>
      </div>
      <span className="relative left-4 z-10 whitespace-nowrap px-8  text-dark transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
        {text}
      </span>
    </Link>
  );
}
