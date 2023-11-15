'use client';
import { ContactUs } from "./components/Contact/section-contact-us";

export default function Home() {
  return (
    <main>
      <div style={{backgroundColor: "#f3f3f3"}}>
      <ContactUs image1="images/contact-img.avif" image2="images/contact-piramid.svg" image3="images/contact-cube.svg"></ContactUs>
      </div>
    </main>
  );
}
