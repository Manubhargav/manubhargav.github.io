import { Nav, MobileNav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Socials } from "@/components/sections/socials";
import { HallOfFame } from "@/components/sections/hall-of-fame";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1 relative overflow-hidden lg:pl-20 pb-14 lg:pb-0">
      <Nav />
      <MobileNav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Socials />
      <HallOfFame />
      <Contact />
    </main>
  );
}
