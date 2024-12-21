
import Contact from "@/components/ui/Contact/Contact";
import Hero from "@/components/ui/Hero/Hero";
import Projects from "@/components/ui/Projects/Projects";
import Services from "@/components/ui/Services/Services";
import Skills from "@/components/ui/Skills/Skills";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import Timeline from "@/components/ui/Timeline/Timeline";

export default function Home() {




  return (
    <div>
      <Hero  ></Hero>
      <Services></Services>
      <Skills/>
      <Projects></Projects>
      <Timeline></Timeline>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
}
