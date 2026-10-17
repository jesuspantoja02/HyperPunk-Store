import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "S/") {
  return `${currency} ${price.toFixed(2)}`;
}

export function formatDiscount(price: number, comparePrice: number) {
  return Math.round(((comparePrice - price) / comparePrice) * 100);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .trim();
}
