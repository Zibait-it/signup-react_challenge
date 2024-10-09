import Image from "next/image";
import SignUpForm from "./components/SignUpForm";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row gap-16 bg-background min-h-screen h-screen pt-16 pb-24 px-6 lg:gap-0 lg:pt-0 lg:pb-0 lg:px-0">
      <div className="w-full lg:h-full lg:w-3/5 lg:bg-[url('/images/Image1.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-top lg:pl-10 lg:pt-8">
        <Image src="/images/logo.svg" width={195} height={33} alt="Logo" />
      </div>
      <div className="w-full h-full lg:w-2/5 lg:px-16 ">
        <SignUpForm />
      </div>
    </main>
  );
}
