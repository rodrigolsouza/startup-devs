'use client';
import { ContactUs } from "./components/Contact/section-contact-us";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Header/>
      <ContactUs src="images/contact-img.avif"></ContactUs>
    </main>
  );
}
