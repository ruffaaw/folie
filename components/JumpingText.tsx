import { motion } from "framer-motion";

const splitText = (text: string, word = false) => {
  if (word) {
    return String(text).split(/(?:\b)/u);
  }
  return String(text).split(/(?:)/u);
};

export default function JumpingText({
  text = "Hello",
  mode = "word",
  className,
}: {
  text: string;
  className?: string;
  mode?: "word" | "character";
}) {
  const isWordMode = mode === "word";
  const nodes = splitText(text, isWordMode);
  return (
    <div className={className} key={text}>
      {nodes.map((node, index) => (
        <motion.span
          key={index}
          initial={{
            translateY: 30,
            rotate: -30,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            rotate: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 2,
              delay: 0.03 * index,
            },
          }}
          className="inline-block origin-center"
        >
          {node === " " ? "\u00A0" : node}
        </motion.span>
      ))}
      <h1 className="sr-only">{text}</h1>
    </div>
  );
}
