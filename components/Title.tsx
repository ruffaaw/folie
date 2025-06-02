import { motion } from "framer-motion";
export default function Title({
  title = "",
  className,
}: {
  title: string;
  className?: string;
}) {
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };
  const left = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };
  const right = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-row gap-3 sm:gap-4 md:gap-5 ${
        className ?? ""
      } mt-8 sm:mt-12 md:mt-16`}
    >
      <motion.div variants={left} className="relative flex items-center">
        <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-white to-dark" />
        <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
      </motion.div>
      <motion.div
        variants={item}
        className="flex items-center justify-center px-6 py-2 border border-dark rounded-full"
      >
        <h5 className="text-dark text-xl text-center">{title}</h5>
      </motion.div>
      <motion.div variants={right} className="relative flex items-center">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-dark rounded-full" />
        <div className="w-24 md:w-32 h-[2px] bg-dark bg-linear-to-r from-dark to-white" />
      </motion.div>
    </motion.div>
  );
}
