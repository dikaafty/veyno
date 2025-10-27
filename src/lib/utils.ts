import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
}

export const capitalize = (str: string): string => {
  return (str[0]?.toUpperCase() || "") + str.slice(1).toLowerCase();
}