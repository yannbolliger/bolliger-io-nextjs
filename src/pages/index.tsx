import { useEffect } from "react"
import Head from "next/head"
import { init } from "emailjs-com"

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
    id: "projects",
    title: "Projekte",
    component: ProjectsSection,
  },
  {
    id: "contact",
    title: "Kontakt",
    component: ContactSection,
  },
]

const Home = () => {
  // Do all the inits
  useEffect(() => {
    init("user_fByLVomFE88sDn2dTvYFK")
  })

  return (
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
}

export default Home
