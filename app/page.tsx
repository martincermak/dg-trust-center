"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Compliance from "@/components/Compliance";
import SecurityPractices from "@/components/SecurityPractices";
import Documents from "@/components/Documents";
import Privacy from "@/components/Privacy";
import Disclosure from "@/components/Disclosure";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";

export default function TrustPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Compliance />
        <SecurityPractices />
        <Privacy />
        <Disclosure />
        <Documents onRequestOpen={() => setFormOpen(true)} />
      </main>
      <Footer />
      <RequestForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
