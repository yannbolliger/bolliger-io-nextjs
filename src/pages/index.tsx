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

const Home = () => {
  useEffect(() => smoothscroll.polyfill())

  const sections = [
    {
      id: "about",
      title: aboutTitle,
      component: AboutSection,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      id: "projects",
      title: projectsTitle,
      component: ProjectsSection,
      ref: useRef<HTMLDivElement>(null),
    },
    {
      id: "contact",
      title: "Kontakt",
      component: ContactSection,
      ref: useRef<HTMLDivElement>(null),
    },
  ]

  return (
    <>
      <Head>
        <title>Bolliger Studios</title>
      </Head>

      <LogoMenuHeader sections={sections} />

      {sections.map((section) => (
        <section.component
          title={section.title}
          key={section.id}
          scrollRef={section.ref}
        />
      ))}
    </>
  )
}

export default Home
