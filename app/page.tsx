"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col lg:flex-row gap-16 bg-background h-full lg:h-screen pt-16 pb-24 px-6 lg:gap-0 lg:pt-0 lg:pb-0 lg:px-0">
      <div className="w-full lg:h-full lg:w-3/5 lg:bg-[url('/images/Image1.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-top lg:pl-10 lg:pt-8">
        <Image src="/images/logo.svg" width={195} height={33} alt="Logo" />
      </div>
      <div className="flex flex-col gap-14 w-full lg:w-2/5 lg:justify-center lg:items-center lg:px-16">
        <div className="flex flex-col gap-6 lg:w-full">
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

        <form className="flex flex-col gap-8 lg:w-full">
          <Input
            icon="/icons/Letter.svg"
            label="Email"
            placeholder="Enter your email address"
            type="text"
            name="email"
            onChange={handleChange}
          />
          <Input
            icon="/icons/User.svg"
            label="Username"
            placeholder="Enter your username"
            type="text"
            name="username"
            onChange={handleChange}
          />
          <Input
            icon="/icons/Lock.svg"
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Input
            icon="/icons/Lock.svg"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </form>
        <Button text="Register" variant="primary" />
      </div>
    </main>
  );
}
