interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

export default function Button({ text, variant }: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-complementary-500 text-primary-50 text-base font-manrope font-semibold flex items-center justify-center rounded-full py-3.5 lg:w-full",
    secondary: "",
  };

  return <button className={variantStyles[variant]}>{text}</button>;
}
