import { useEffect, useRef } from "react"
import Head from "next/head"
import { init } from "emailjs-com"
import smoothscroll from "smoothscroll-polyfill"

import AboutSection from "../components/AboutSection"
import ContactSection from "../components/ContactSection"
import LogoMenuHeader from "../components/LogoMenuHeader"
import ProjectsSection from "../components/ProjectsSection"
// @ts-ignore
import { title as aboutTitle } from "../content/About.mdx"
// @ts-ignore
import { title as projectsTitle } from "../content/Projects.mdx"

const sections = [
  {
    id: "about",
    title: aboutTitle,
    component: AboutSection,
  },
  {
    id: "projects",
    title: projectsTitle,
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
    smoothscroll.polyfill()
    init("user_fByLVomFE88sDn2dTvYFK")
  })

  return (
    <>
      <Head>
        <title>Bolliger Studios</title>
      </Head>

      <LogoMenuHeader sections={sections} />

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
