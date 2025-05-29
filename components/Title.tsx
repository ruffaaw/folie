export default function Title({
  title = "",
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-row gap-5 ${className ?? ""} mt-16`}>
      <div className="relative flex items-center">
        <div className="w-32 h-[2px] bg-dark bg-linear-to-r from-white to-dark" />
        <div className="w-3 h-3 bg-dark rounded-full" />
      </div>
      <div className="flex items-center justify-center px-6 py-2 border border-dark rounded-full">
        <h5 className="text-dark text-xl">{title}</h5>
      </div>
      <div className="relative flex items-center">
        <div className="w-3 h-3 bg-dark rounded-full" />
        <div className="w-32 h-[2px] bg-dark bg-linear-to-r from-dark to-white" />
      </div>
    </div>
  );
}
