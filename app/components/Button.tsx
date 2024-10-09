import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

type ButtonProps = {
  variant: "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const button = tv({
  base: "text-base text-primary-50 rounded-full flex items-center justify-center py-3.5 lg:w-full ",
  variants: {
    variant: {
      primary: "bg-complementary-500 text-primary-50",
    },
  },
});

export default function Button({
  children,
  variant,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={button({ variant })} {...rest}>
      {children}
    </button>
  );
}
