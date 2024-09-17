"use client";
import React from "react";
import FileUpload from "../../components/formupload";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referral",
  description: "Need support? Feel free to reach out.",
};

export default function WorkWithUs() {
  return (
    <main className="py-[160px]  flex items-center justify-center flex-col font-Oswald  px-5 bg-primary ">
      <FileUpload />
    </main>
  );
}
