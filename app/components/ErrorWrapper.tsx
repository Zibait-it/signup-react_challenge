import { PropsWithChildren } from "react";

export default function ErrorWrapper({ children }: PropsWithChildren) {
  return (
    <span className="text-xs font-manrope text-complementary-700 tracking-wide">
      {children}
    </span>
  );
}
