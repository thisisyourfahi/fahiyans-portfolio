import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Header from "@/components/Header";
import NotImportant from "@/components/NotImportant";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Education />
      <Skills />
      <Extracurricular />
      <NotImportant />
    </div>
  );
}
