"use client";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { User, Letter, Lock, LoadingSpinner, Confetti } from "./Icons";
import { useForm } from "react-hook-form";
import { FormData } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../validationSchemas";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({ resolver: zodResolver(signUpSchema) });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const hasErrors = Object.keys(errors).length > 0;

  const handleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 1000);
  };

  if (loading)
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <LoadingSpinner />
      </section>
    );

  if (completed)
    return (
      <section className="w-full h-screen flex flex-col items-center justify-center text-center gap-6 ">
        <Confetti className="fill-complementary-400" />
        <h2 className="font-ubuntu font-medium text-4xl text-complementary-700">
          Great!
          <br />
          You signed in
        </h2>
      </section>
    );

  return (
    <section className="w-full h-full flex flex-col gap-14 lg:justify-center lg:items-center">
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
          icon={<Letter />}
          label="Email"
          placeholder="Enter your email address"
          type="text"
          name="email"
          register={register}
          errors={errors}
          value={watch("email")}
        />
        <Input
          icon={<User />}
          label="Username"
          placeholder="Enter your username"
          type="text"
          name="username"
          register={register}
          errors={errors}
          value={watch("username")}
        />
        <Input
          icon={<Lock />}
          label="Password"
          placeholder="Enter your password"
          type="password"
          name="password"
          register={register}
          errors={errors}
          value={watch("password")}
        />
        <Input
          icon={<Lock />}
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          name="confirmPassword"
          register={register}
          errors={errors}
          value={watch("confirmPassword")}
        />
      </form>
      <Button
        variant="primary"
        disabled={hasErrors}
        onClick={handleSubmit(handleSignUp)}
      >
        Register
      </Button>
    </section>
  );
}
