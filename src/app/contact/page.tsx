"use client";
import React from "react";
import { Widget } from "@typeform/embed-react";
import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "For any enquiries, please feel free to reach out here.",
};

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
