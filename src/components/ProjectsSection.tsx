import { FunctionComponent } from "react"
import Image from "next/image"
import { chunk } from "lodash"

import Projects from "../content/Projects.mdx"
import { baseUnits, colors } from "../styled"
import Container from "../styled/Container"
import SideTitleSection from "../styled/SideTitleSection"
import SplitView from "../styled/SplitView"
import { MediumTitle } from "../styled/typography"
import { Section } from "./Menu"
import TextBlockSection from "./TextBlockSection"

import dj from "../content/djing.jpg"
import moderation from "../content/moderation.png"
import portrait from "../content/portrait.jpg"

const projects = [
  {
    name: "DJ",
    person: "both",
    img: dj,
    desc: (
      <>
        Als DJ-Duo Fratelli Flex treten wir gemeinsam auf.{" "}
        <i>Strictly hits only.</i>
      </>
    ),
  },
  {
    name: "Public speaking",
    person: "Yann",
    img: moderation,
    desc: (
      <>
        Wir geniessen die Bühnenluft, zum Beispiel bei der Moderation des
        Gala-Abends.
      </>
    ),
  },
  {
    name: "Fotografie",
    person: "Éric",
    img: portrait,
    desc: "Ob Unternehmensporträt oder ...",
  },
]

const ProjectsSection: FunctionComponent<Section> = (props) => (
  <>
    <TextBlockSection {...props} color={colors.secondary} borderTop>
      <Projects />
    </TextBlockSection>

    {chunk(projects, 2).map((pjs) => (
      <SplitView key={pjs.map((p) => p.name).join("-")}>
        {pjs.map(({ name, person, img, desc }, i) => (
          <Container
            key={name}
            color={colors.secondaryLight}
            borderTop
            borderRight={pjs.length > 1 && i == 0}
            style={{ width: "100%", flexGrow: 1 }}
          >
            <SideTitleSection title={person === "both" ? "Beide" : person}>
              <MediumTitle>{name}</MediumTitle>
            </SideTitleSection>
            {img && (
              <Image
                src={img}
                alt={name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 500,
                  objectFit: "cover",
                  marginBottom: baseUnits(0.5),
                }}
              />
            )}
            <p>{desc}</p>
          </Container>
        ))}
      </SplitView>
    ))}
  </>
)

export default ProjectsSection
