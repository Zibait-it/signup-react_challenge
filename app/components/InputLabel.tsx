import { PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

type InputLabelProps = {
  inputState: "error" | "filled" | "empty";
};

const label = tv({
  base: "font-manrope text-primary-600 font-normal text-xs tracking-wide",
  variants: {
    state: {
      error: "font-semibold text-complementary-600",
      filled: "",
      empty: "",
    },
  },
});

export default function InputLabel({
  inputState,
  children,
}: PropsWithChildren<InputLabelProps>) {
  return <label className={label({ state: inputState })}>{children}</label>;
}
