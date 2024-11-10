import ContactInfo from "@/components/main/ContactInfo";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full xl:container mx-auto">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Projects />
        <ContactInfo />
      </div>
    </main>
  );
}
