"use client";
import { ContactUs } from "./components/Contact/section-contact-us";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ContactUs src="images/contact-img.avif"></ContactUs>
    </main>
  );
}
