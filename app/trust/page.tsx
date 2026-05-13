"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import SecurityPractices from "@/components/SecurityPractices";
import Documents from "@/components/Documents";
import Privacy from "@/components/Privacy";
import Subprocessors from "@/components/Subprocessors";
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
        <Certifications />
        <SecurityPractices />
        <Documents onRequestOpen={() => setFormOpen(true)} />
        <Privacy />
        <Subprocessors />
        <Disclosure />
      </main>
      <Footer />
      <RequestForm open={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
