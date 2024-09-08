import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Nav";
import RecentProjects from "@/components/RecentProjects";
import Testimonial from "@/components/Testimonial";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <RecentProjects />
        <Testimonial />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
