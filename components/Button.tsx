import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import { Link } from "./Link";

const variants = {
  primary: clsx(
    "inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] leading-loose",
    "border border-transparent bg-gray-950",
    "whitespace-nowrap text-base font-medium text-white",
    "data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40"
  ),
  secondary: clsx(
    "relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] leading-loose",
    "border border-transparent bg-white/15 ring-1 ring-[#D15052]/15",
    "after:absolute after:inset-0",
    "whitespace-nowrap text-base font-medium text-gray-950",
    "data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40"
  ),
  outline: clsx(
    "inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)] leading-loose",
    "border border-transparent ring-1 ring-black/10",
    "whitespace-nowrap text-sm font-medium text-gray-950",
    "data-[disabled]:bg-transparent data-[hover]:bg-gray-50 data-[disabled]:opacity-40"
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant]);

  if (typeof props.href === "undefined") {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
