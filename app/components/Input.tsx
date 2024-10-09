import { ReactNode, InputHTMLAttributes } from "react";
import { EyeClosed } from "./Icons";
import InputLabel from "./InputLabel";
import InputWrapper from "./InputWrapper";

type InputProps = {
  label: string;
  placeholder: string;
  icon: ReactNode;
  type: string;
  name: string;
  value: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  placeholder,
  icon,
  type,
  name,
  value,
  ...rest
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
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
          name={name}
          type={type}
          className={`outline-none flex w-full pl-10 py-4 rounded-tl-lg border-b border-primary-500 bg-primary-50 placeholder:text-primary-600 text-primary-900 rounded-tr-lg font-light text-base font-manrope tracking-wide transition-colors duration-150
            ${value && "border-primary-800"}`}
          placeholder={placeholder}
        ></input>
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
    </InputWrapper>
  );
}
