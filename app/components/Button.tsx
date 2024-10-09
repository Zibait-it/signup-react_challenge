import { PropsWithChildren, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const variantStyles = {
    primary:
      "bg-complementary-500 text-primary-50 text-base font-manrope font-semibold flex items-center justify-center rounded-full py-3.5 lg:w-full",
    secondary: "",
  };

  return (
    <button className={variantStyles[variant]} {...rest}>
      {children}
    </button>
  );
}
