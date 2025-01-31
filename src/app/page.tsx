import About from "@/components/home/About";
import EmailSection from "@/components/home/EmailSection";
import Index from "@/components/home/Index";
import Projects from "@/components/home/Projects";
import AchievementsSection from "@/components/home/AchievementsSection";
import Skills from "@/components/home/Skills";
import Experiance from "@/components/home/Experiance";

export default function Home() {
  return (
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    <main>
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <Index />
        <AchievementsSection />
        <About />
        <Skills />
        <Experiance />
        <Projects />
        <EmailSection />
      </div>
      
    </main>
  );
}
