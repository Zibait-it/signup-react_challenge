import Image from "next/image";
import Logo from "./assets/images/logo.svg";
import Input from "./components/Input";
import LetterIcon from "./assets/icons/Letter.svg";
import LockIcon from "./assets/icons/Lock.svg";
import UserIcon from "./assets/icons/User.svg";
import Button from "./components/Button";

export default function SignUp() {
  return (
    <main className="flex flex-col gap-16 bg-background h-full pt-16 pb-24 px-6">
      <Image src={Logo} alt="Logo" className="w-52 h-auto" />
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <h1 className="font-ubuntu text-3xl font-medium text-primary-700">
            Sign up
          </h1>
          <div className="flex flex-col gap-1 font-manrope font-normal text-base text-primary-600 tracking-wide">
            <p>If you already have an account register</p>
            <p>
              You can{" "}
              <a className="text-complementary-500 font-bold underline" href="">
                Login here!
              </a>
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-8">
          <Input
            icon={LetterIcon}
            label="Email"
            placeholder="Enter your email address"
            type="text"
          />
          <Input
            icon={UserIcon}
            label="Username"
            placeholder="Enter your username"
            type="text"
          />
          <Input
            icon={LockIcon}
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <Input
            icon={LockIcon}
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
          />
        </form>
        <Button text="Register" variant="primary" />
      </div>
    </main>
  );
}
