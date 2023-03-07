export const containerFramerMotion = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.4,
    },
  },
}

export const itemFramerMotion = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
