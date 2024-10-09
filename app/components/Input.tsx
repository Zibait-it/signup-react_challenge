import { ReactNode } from "react";
import EyeClosed from "./Icons/EyeClosed";

interface InputProps {
  label: string;
  placeholder: string;
  icon: ReactNode;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

export default function Input({
  label,
  placeholder,
  icon,
  type,
  onChange,
  name,
  value,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-manrope text-primary-600 font-normal text-xs tracking-wide">
        {label}
      </label>
      <div className="relative">
        <div
          className={`flex items-center absolute inset-y-0 pl-3 fill-primary-400 transition-colors duration-150 ${
            value && "fill-primary-600"
          }`}
        >
          {icon}
        </div>
        <input
          name={name}
          onChange={onChange}
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
    </div>
  );
}
