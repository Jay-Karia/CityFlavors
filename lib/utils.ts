import { ClassValue, clsx as clsx_1 } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx_1(inputs))
}
