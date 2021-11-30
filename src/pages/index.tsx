import React, { useEffect, useRef } from "react"
import Head from "next/head"
import smoothscroll from "smoothscroll-polyfill"

import LogoMenuHeader from "../components/LogoMenuHeader"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

const sections = [
  { id: "about", component: AboutSection },
  { id: "projects", component: ProjectsSection },
  { id: "contact", component: ContactSection },
]

const Home = () => {
  useEffect(() => smoothscroll.polyfill())

  const sectionsWithRefs = sections.map((section) => ({
    ref: useRef(null),
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
