import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import { Inter } from "next/font/google";
import Testimonial from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Header />
      <Services />
      <CTA />
      <Testimonial />
      <FAQ />
      <Contact />
      {/*   <Footer /> */}
    </main>
  );
}
