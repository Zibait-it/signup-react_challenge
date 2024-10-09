"use client";
import Image from "next/image";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Letter from "./components/Icons/Letter";
import Lock from "./components/Icons/Lock";
import User from "./components/Icons/User";
import LoadingSpinner from "./components/Icons/LoadingSpinner";
import Confetti from "./components/Icons/Confetti";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    setLoading(true);
    setTimeout(() => {
      setCompleted(true);
      setLoading(false);
    }, 1000);
    setCompleted(true);
  };

  return (
    <main className="flex flex-col lg:flex-row gap-16 bg-background min-h-screen h-screen pt-16 pb-24 px-6 lg:gap-0 lg:pt-0 lg:pb-0 lg:px-0">
      <div className="w-full lg:h-full lg:w-3/5 lg:bg-[url('/images/Image1.jpg')] lg:bg-cover lg:bg-no-repeat lg:bg-top lg:pl-10 lg:pt-8">
        <Image src="/images/logo.svg" width={195} height={33} alt="Logo" />
      </div>
      <div className="w-full h-full lg:w-2/5 lg:px-16 ">
        {loading ? (
          <section className="w-full h-full flex items-center justify-center">
            <LoadingSpinner />
          </section>
        ) : completed ? (
          <section
            className={`w-full h-full flex flex-col items-center justify-center text-center gap-6`}
          >
            <Confetti />
            <h2
              className={`font-ubuntu font-medium text-4xl text-complementary-700`}
            >
              Great!
              <br />
              You signed in
            </h2>
          </section>
        ) : (
          <section className="w-full h-full flex flex-col gap-14 lg:justify-center lg:items-center">
            <div className="flex flex-col gap-6 lg:w-full">
              <h1 className="font-ubuntu text-3xl font-medium text-primary-700">
                Sign up
              </h1>
              <div className="flex flex-col gap-1 font-manrope font-normal text-base text-primary-600 tracking-wide">
                <p>If you already have an account register</p>
                <p>
                  You can{" "}
                  <a
                    className="text-complementary-500 font-bold underline"
                    href=""
                  >
                    Login here!
                  </a>
                </p>
              </div>
            </div>
            <form className="flex flex-col gap-8 lg:w-full">
              <Input
                icon={<Letter />}
                label="Email"
                placeholder="Enter your email address"
                type="text"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <Input
                icon={<User />}
                label="Username"
                placeholder="Enter your username"
                type="text"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />
              <Input
                icon={<Lock />}
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
              <Input
                icon={<Lock />}
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
            </form>
            <Button text="Register" variant="primary" onClick={handleSubmit} />
          </section>
        )}
      </div>
    </main>
  );
}
