import type { NextPage } from "next";
import Head from "next/head";
import SignupForm from "@/components/authUser/auth/SignupFrom";

const SignupPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Signup Page</title>
        <meta
          name="description"
          content="Signup page with Next.js, TypeScript, and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
