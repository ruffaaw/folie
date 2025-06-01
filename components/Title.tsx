export default function Title({
  title = "",
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-row gap-3 sm:gap-4 md:gap-5 ${
        className ?? ""
      } mt-8 sm:mt-12 md:mt-16`}
    >
      <div className="relative flex items-center">
        <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-white to-dark" />
        <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
      </div>
      <div className="flex items-center justify-center px-6 py-2 border border-dark rounded-full">
        <h5 className="text-dark text-xl text-center">{title}</h5>
      </div>
      <div className="relative flex items-center">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
        <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-dark to-white" />
      </div>
    </div>
  );
}
