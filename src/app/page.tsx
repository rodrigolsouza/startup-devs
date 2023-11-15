"use client";
import { ContactUs } from "./components/Contact/section-contact-us";
import { Header } from "./components/Header/Header";
import { SectionHome } from "./components/Home/SectionHome";





export default function Home() {
  return (
    <main>
      <Header></Header>
      <SectionHome imgSrc="https://cdn.lugc.link/ceb0edac-1016-4630-a72a-4b5d92857a6d/-/preview/-/stretch/off/-/format/auto/-/quality/normal/-/resize/x603/"
        title="digital marketing agency."
        subtitle=""
        buttonText="Let's Talk" />
      <ContactUs src="images/contact-img.avif"></ContactUs>
    </main>
  );
}
 