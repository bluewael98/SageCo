"use client"
import React from "react";

import Head from "next/head";
import ContactForm from "@/components/ContactForm";


export default function WorkWithUs() {
  return (
    <main className="flex min-h-screen w-screen justify-center bg-primary py-[200px]">
      <Head>
        <title>Contact us</title>
        <meta name="description" content="We would love to hear from you!" />
      </Head>
      <ContactForm />
    </main>
  );
}
