import type { NextPage } from "next";
import Head from "next/head";
import FormDescription from "../components/FormDescription";
import { trpc } from "../utils/trpc";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Nav from "../components/Nav";
import Form from "../components/Form";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const session = useSession();


  return (
    <>

      <div className="min-h-screen w-full bg-black text-white">
        <main className="mx-auto flex flex-col items-center justify-center">
          <div className="mt-10">
            <h1 className="text-5xl">CH. IV: VEHICLE APPLICATION FORM</h1>
          </div>
          <FormDescription />
          <Form />
        </main>
      </div>
    </>
  );
};

export default Home;