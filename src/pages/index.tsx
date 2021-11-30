import React, { useEffect, useRef } from "react"
import Head from "next/head"
import smoothscroll from "smoothscroll-polyfill"

import LogoMenuHeader from "../components/LogoMenuHeader"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

// @ts-ignore
import { title as aboutTitle } from "../content/About.mdx"
// @ts-ignore
import { title as projectsTitle } from "../content/Projects.mdx"

const sections = [
  { id: "about", title: aboutTitle, component: AboutSection },
  { id: "projects", title: projectsTitle, component: ProjectsSection },
  { id: "contact", title: "Kontakt", component: ContactSection },
]

const Home = () => {
  useEffect(() => smoothscroll.polyfill())

  const sectionsWithRefs = sections.map((section) => ({
    ref: useRef<HTMLDivElement>(null),
    ...section,
  }))

  return (
    <>
      <Head>
        <title>Bolliger Studios</title>
      </Head>

      <LogoMenuHeader sections={sectionsWithRefs} />

      {sectionsWithRefs.map((section) => (
        <section.component key={section.id} scrollRef={section.ref} />
      ))}
    </>
  )
}

export default Home
