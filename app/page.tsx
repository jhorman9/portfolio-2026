import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Service from "@/components/Service";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import SiteContact from "@/components/SiteContact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <BrandMarquee />
        <Service />
        <Portfolio />
        <About />
        <Experience />
        <Tools />
        <SiteContact />
      </main>
    </>
  );
}
