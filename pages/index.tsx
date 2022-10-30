import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Raja Kalavala</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contat Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media-exp1.licdn.com/dms/image/C5603AQG0CeEcQRy1ng/profile-displayphoto-shrink_800_800/0/1613901896297?e=1672272000&v=beta&t=jSlv8BZ9kpQe4snVm49DpXBQodHAQPyFzk7d543xuls"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
