import { PropsWithChildren } from "react";

export default function InputWrapper({ children }: PropsWithChildren) {
  return <div className="flex flex-col gap-1">{children}</div>;
}
