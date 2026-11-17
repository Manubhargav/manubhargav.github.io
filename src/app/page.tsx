import { Nav, MobileNav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Socials } from "@/components/sections/socials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1 relative overflow-hidden lg:pl-20 pb-14 lg:pb-0">
      <Nav />
      <MobileNav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Gallery />
      <Socials />
      <Contact />
    </main>
  );
}
