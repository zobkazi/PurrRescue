import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "@/components/authUser/auth/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <meta
          name="description"
          content="Login page with Next.js, TypeScript, and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
