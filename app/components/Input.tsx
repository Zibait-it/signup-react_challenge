import { ReactNode, InputHTMLAttributes } from "react";
import { EyeClosed } from "./Icons";
import InputLabel from "./InputLabel";
import InputWrapper from "./InputWrapper";
import { FormData } from "../types";
import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form";
import ErrorWrapper from "./ErrorWrapper";
import { tv } from "tailwind-variants";

type InputProps = {
  label: string;
  placeholder: string;
  icon: ReactNode;
  type: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  rules: RegisterOptions<FormData>;
  errors: FieldErrors<FormData>;
} & InputHTMLAttributes<HTMLInputElement>;

const input = tv({
  base: "outline-none flex w-full pl-10 py-4 rounded-tl-lg bg-primary-50 placeholder:text-primary-600 text-primary-900 rounded-tr-lg font-light text-base font-manrope tracking-wide transition-colors duration-150",
  variants: {
    state: {
      empty: "border-primary-500 border-b",
      filled: "border-primary-800 border-b",
      error: "border-complementary-600 border-b-2",
    },
  },
});

export default function Input({
  label,
  placeholder,
  icon,
  type,
  name,
  register,
  rules,
  errors,
  value,
  ...rest
}: InputProps) {
  let inputState: "error" | "filled" | "empty";

  if (errors && errors[name]) {
    inputState = "error";
  } else if (value) {
    inputState = "filled";
  } else {
    inputState = "empty";
  }

  return (
    <InputWrapper>
      <InputLabel state={inputState}>{label}</InputLabel>
      <div className="relative">
        <div
          className={`flex items-center absolute inset-y-0 pl-3 fill-primary-400 transition-colors duration-150 ${
            value && "fill-primary-600"
          }`}
        >
          {icon}
        </div>
        <input
          {...rest}
          {...register(name, rules)}
          type={type}
          className={input({ state: inputState })}
          placeholder={placeholder}
        />
        {type === "password" ? (
          <div
            className={`flex items-center absolute inset-y-0 right-0 pr-3 fill-primary-400 transition-colors duration-150 ${
              value && "fill-primary-600"
            }`}
          >
            <EyeClosed />
          </div>
        ) : null}
      </div>
      {errors && errors[name] && (
        <ErrorWrapper>{errors[name]?.message}</ErrorWrapper>
      )}
    </InputWrapper>
  );
}
