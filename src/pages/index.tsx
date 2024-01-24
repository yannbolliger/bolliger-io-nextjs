import Head from "next/head"

import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import LogoMenuHeader from "../components/LogoMenuHeader"
import ProjectsSection from "../components/ProjectsSection"

const sections = [
  {
    id: "about",
    title: "Über uns",
    component: AboutSection,
  },
  {
    id: "interests",
    title: "Interessen",
    component: ProjectsSection,
  },
  {
    id: "contact",
    title: "Kontakt",
    component: ContactSection,
  },
]

const Home = () => (
  <>
    <Head>
      <title>Bolliger Studios</title>
    </Head>

    <LogoMenuHeader entries={[...sections]} />

    {sections.map((section) => (
      <section.component
        key={section.id}
        id={section.id}
        title={section.title}
      />
    ))}
  </>
)

export default Home
