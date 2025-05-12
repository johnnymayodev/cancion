const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";
const WHITE = "\x1b[37m";

export const log = (type: "info" | "error", message: string) => {
  const color = type === "info" ? GREEN : type === "error" ? RED : YELLOW;
  console.log(
    `${color}[${new Date().toISOString()}] [${type.toUpperCase()}]:\x1b[0m ${message}`,
  );
};
