import { PropsWithChildren } from "react";

export default function InputLabel({ children }: PropsWithChildren) {
  return (
    <label className="font-manrope text-primary-600 font-normal text-xs tracking-wide">
      {children}
    </label>
  );
}
