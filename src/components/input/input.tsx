import { InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: Props) => {
  return <input className={cn("input", className)} {...props} />;
};
